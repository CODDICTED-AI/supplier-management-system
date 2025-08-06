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

      // 处理文件信息
      let fileInfo: {
        contract_file_path: string | null;
        contract_file_original_name: string | null;
        contract_file_size: number | null;
        contract_file_upload_time: string | null;
      } = {
        contract_file_path: null,
        contract_file_original_name: null,
        contract_file_size: null,
        contract_file_upload_time: null
      };

      if (req.file) {
        console.log('文件上传信息:', {
          filename: req.file.filename,
          originalname: req.file.originalname,
          size: req.file.size,
          path: req.file.path
        });
        
        fileInfo = {
          contract_file_path: `uploads/contracts/${req.file.filename}`,
          contract_file_original_name: req.file.originalname,
          contract_file_size: req.file.size,
          contract_file_upload_time: new Date().toISOString()
        };
      }

      // 插入新供应商
      const result = await db.query(
        `INSERT INTO suppliers (company_name, contact_person, contact_phone, contract_start_date, 
         contract_end_date, logistics_type, contract_file_path, contract_file_original_name, 
         contract_file_size, contract_file_upload_time) 
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
        [
          supplierData.company_name,
          supplierData.contact_person,
          supplierData.contact_phone || null,
          supplierData.contract_start_date || null,
          supplierData.contract_end_date || null,
          supplierData.logistics_type || '随货',
          fileInfo.contract_file_path,
          fileInfo.contract_file_original_name,
          fileInfo.contract_file_size,
          fileInfo.contract_file_upload_time
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

      // 处理文件信息（如果有新文件上传）
      let updateFields = {
        company_name: supplierData.company_name,
        contact_person: supplierData.contact_person,
        contact_phone: supplierData.contact_phone || null,
        contract_start_date: supplierData.contract_start_date || null,
        contract_end_date: supplierData.contract_end_date || null,
        logistics_type: supplierData.logistics_type || '随货'
      };

      let updateQuery = `UPDATE suppliers SET company_name = $1, contact_person = $2, contact_phone = $3,
         contract_start_date = $4, contract_end_date = $5, logistics_type = $6, updated_at = CURRENT_TIMESTAMP`;
      let updateValues: any[] = [
        updateFields.company_name,
        updateFields.contact_person,
        updateFields.contact_phone,
        updateFields.contract_start_date,
        updateFields.contract_end_date,
        updateFields.logistics_type
      ];

      // 如果有新文件上传，更新文件信息
      if (req.file) {
        updateQuery += `, contract_file_path = $7, contract_file_original_name = $8, 
                         contract_file_size = $9, contract_file_upload_time = $10 WHERE id = $11 RETURNING *`;
        updateValues.push(
          `uploads/contracts/${req.file.filename}`,
          req.file.originalname,
          req.file.size,
          new Date().toISOString(),
          id
        );
      } else {
        updateQuery += ` WHERE id = $7 RETURNING *`;
        updateValues.push(id);
      }

      // 更新供应商信息
      const result = await db.query(updateQuery, updateValues);

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