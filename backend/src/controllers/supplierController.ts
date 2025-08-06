import { Request, Response } from 'express';
import { db } from '../config/database';
import { Supplier, ApiResponse } from '../types';

export class SupplierController {
  // 创建供应商
  async createSupplier(req: Request, res: Response) {
    try {
      const supplierData: Supplier = req.body;
      
      // 验证必填字段
      if (!supplierData.company_name || !supplierData.contact_person) {
        return res.status(400).json({
          success: false,
          error: '公司名称和联系人为必填字段'
        });
      }

      // 检查公司名称是否已存在
      const existingSuppliers = await db.query(
        'SELECT id FROM suppliers WHERE company_name = $1',
        [supplierData.company_name]
      );

      if (existingSuppliers.rows.length > 0) {
        return res.status(400).json({
          success: false,
          error: '公司名称已存在'
        });
      }

      // 插入新供应商
      const result = await db.query(
        `INSERT INTO suppliers (company_name, contact_person, contract_start_date, 
         contract_end_date, logistics_type, contract_file_path) 
         VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
        [
          supplierData.company_name,
          supplierData.contact_person,
          supplierData.contract_start_date || null,
          supplierData.contract_end_date || null,
          supplierData.logistics_type || '随货',
          supplierData.contract_file_path || null
        ]
      );

      res.status(201).json({
        success: true,
        data: result.rows[0],
        message: '供应商创建成功'
      });
    } catch (error) {
      console.error('创建供应商错误:', error);
      res.status(500).json({
        success: false,
        error: '创建供应商失败'
      });
    }
  }
  
  // 获取所有供应商
  async getSuppliers(req: Request, res: Response) {
    try {
      const result = await db.query(
        'SELECT * FROM suppliers ORDER BY created_at DESC'
      );

      res.json({
        success: true,
        data: result.rows
      });
    } catch (error) {
      console.error('获取供应商列表错误:', error);
      res.status(500).json({
        success: false,
        error: '获取供应商列表失败'
      });
    }
  }
  
  // 搜索供应商
  async searchSuppliers(req: Request, res: Response) {
    try {
      const { keyword } = req.query;
      
      if (!keyword) {
        return res.status(400).json({
          success: false,
          error: '搜索关键词不能为空'
        });
      }

      const result = await db.query(
        'SELECT * FROM suppliers WHERE company_name LIKE $1 OR contact_person LIKE $2 ORDER BY created_at DESC',
        [`%${keyword}%`, `%${keyword}%`]
      );

      res.json({
        success: true,
        data: result.rows
      });
    } catch (error) {
      console.error('搜索供应商错误:', error);
      res.status(500).json({
        success: false,
        error: '搜索供应商失败'
      });
    }
  }
  
  // 更新供应商
  async updateSupplier(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const supplierData: Supplier = req.body;

      // 验证必填字段
      if (!supplierData.company_name || !supplierData.contact_person) {
        return res.status(400).json({
          success: false,
          error: '公司名称和联系人为必填字段'
        });
      }

      // 检查公司名称是否已被其他供应商使用
      const existingSuppliers = await db.query(
        'SELECT id FROM suppliers WHERE company_name = $1 AND id != $2',
        [supplierData.company_name, id]
      );

      if (existingSuppliers.rows.length > 0) {
        return res.status(400).json({
          success: false,
          error: '公司名称已被其他供应商使用'
        });
      }

      // 更新供应商信息
      const result = await db.query(
        `UPDATE suppliers SET company_name = $1, contact_person = $2, 
         contract_start_date = $3, contract_end_date = $4, logistics_type = $5, 
         contract_file_path = $6, updated_at = CURRENT_TIMESTAMP 
         WHERE id = $7 RETURNING *`,
        [
          supplierData.company_name,
          supplierData.contact_person,
          supplierData.contract_start_date || null,
          supplierData.contract_end_date || null,
          supplierData.logistics_type || '随货',
          supplierData.contract_file_path || null,
          id
        ]
      );

      if (result.rows.length === 0) {
        return res.status(404).json({
          success: false,
          error: '供应商不存在'
        });
      }

      res.json({
        success: true,
        message: '供应商更新成功'
      });
    } catch (error) {
      console.error('更新供应商错误:', error);
      res.status(500).json({
        success: false,
        error: '更新供应商失败'
      });
    }
  }
  
  // 删除供应商
  async deleteSupplier(req: Request, res: Response) {
    try {
      const { id } = req.params;

      // 检查是否有相关订单
      const orders = await db.query(
        'SELECT id FROM orders WHERE supplier_id = $1',
        [id]
      );

      if (orders.rows.length > 0) {
        return res.status(400).json({
          success: false,
          error: '该供应商存在相关订单，无法删除'
        });
      }

      // 删除供应商
      const result = await db.query(
        'DELETE FROM suppliers WHERE id = $1 RETURNING *',
        [id]
      );

      if (result.rows.length === 0) {
        return res.status(404).json({
          success: false,
          error: '供应商不存在'
        });
      }

      res.json({
        success: true,
        message: '供应商删除成功'
      });
    } catch (error) {
      console.error('删除供应商错误:', error);
      res.status(500).json({
        success: false,
        error: '删除供应商失败'
      });
    }
  }
} 