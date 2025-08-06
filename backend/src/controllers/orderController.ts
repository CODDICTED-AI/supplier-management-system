import { Request, Response } from 'express';
import { db } from '../config/database';
import { Order, OrderWithSupplier, PaginationParams, PaginatedResponse } from '../types';

export class OrderController {
  // 创建订单
  async createOrder(req: Request, res: Response) {
    try {
      const orderData: Order = req.body;
      
      // 验证必填字段
      if (!orderData.supplier_id || !orderData.order_contact || 
          !orderData.product_name || !orderData.order_date || 
          !orderData.unit_price || !orderData.quantity) {
        return res.status(400).json({
          success: false,
          error: '所有字段都为必填'
        });
      }

      // 验证供应商是否存在
      const suppliers = await db.query(
        'SELECT id FROM suppliers WHERE id = $1',
        [orderData.supplier_id]
      );

      if (suppliers.rows.length === 0) {
        return res.status(400).json({
          success: false,
          error: '供应商不存在'
        });
      }

      // 插入新订单
      const result = await db.query(
        `INSERT INTO orders (supplier_id, order_contact, product_name, order_date, 
         unit_price, quantity, expected_delivery_date, status) 
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
        [
          orderData.supplier_id,
          orderData.order_contact,
          orderData.product_name,
          orderData.order_date,
          orderData.unit_price,
          orderData.quantity,
          orderData.expected_delivery_date || null,
          orderData.status || '未完成'
        ]
      );

      res.status(201).json({
        success: true,
        data: result.rows[0],
        message: '订单创建成功'
      });
    } catch (error) {
      console.error('创建订单错误:', error);
      res.status(500).json({
        success: false,
        error: '创建订单失败'
      });
    }
  }
  
  // 获取订单列表（支持分页和状态筛选）
  async getOrders(req: Request, res: Response) {
    try {
      const { page = '1', limit = '10', status, keyword } = req.query;
      const pageNum = parseInt(page as string);
      const limitNum = parseInt(limit as string);
      const offset = (pageNum - 1) * limitNum;

      let whereClause = '';
      let params: any[] = [];
      let paramIndex = 1;

      // 构建查询条件
      if (status && status !== 'all') {
        whereClause += ` WHERE o.status = $${paramIndex}`;
        params.push(status);
        paramIndex++;
      }

      if (keyword) {
        const keywordCondition = `o.product_name LIKE $${paramIndex} OR s.company_name LIKE $${paramIndex + 1}`;
        if (whereClause) {
          whereClause += ` AND (${keywordCondition})`;
        } else {
          whereClause += ` WHERE ${keywordCondition}`;
        }
        params.push(`%${keyword}%`, `%${keyword}%`);
        paramIndex += 2;
      }

      // 获取总数
      const countResult = await db.query(
        `SELECT COUNT(*) as total FROM orders o 
         LEFT JOIN suppliers s ON o.supplier_id = s.id ${whereClause}`,
        params
      );
      const total = parseInt(countResult.rows[0].total);

      // 获取订单列表
      const orders = await db.query(
        `SELECT o.*, s.company_name FROM orders o 
         LEFT JOIN suppliers s ON o.supplier_id = s.id 
         ${whereClause} 
         ORDER BY o.created_at DESC 
         LIMIT $${paramIndex} OFFSET $${paramIndex + 1}`,
        [...params, limitNum, offset]
      );

      const totalPages = Math.ceil(total / limitNum);

      const response: PaginatedResponse<OrderWithSupplier> = {
        data: orders.rows as OrderWithSupplier[],
        total,
        page: pageNum,
        limit: limitNum,
        totalPages
      };

      res.json({
        success: true,
        data: response
      });
    } catch (error) {
      console.error('获取订单列表错误:', error);
      res.status(500).json({
        success: false,
        error: '获取订单列表失败'
      });
    }
  }
  
  // 获取订单详情
  async getOrderDetail(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const orders = await db.query(
        `SELECT o.*, s.company_name FROM orders o 
         LEFT JOIN suppliers s ON o.supplier_id = s.id 
         WHERE o.id = $1`,
        [id]
      );

      if (orders.rows.length === 0) {
        return res.status(404).json({
          success: false,
          error: '订单不存在'
        });
      }

      res.json({
        success: true,
        data: orders.rows[0]
      });
    } catch (error) {
      console.error('获取订单详情错误:', error);
      res.status(500).json({
        success: false,
        error: '获取订单详情失败'
      });
    }
  }
  
  // 更新订单状态
  async updateOrderStatus(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { status } = req.body;

      if (!status || !['未完成', '已完成'].includes(status)) {
        return res.status(400).json({
          success: false,
          error: '状态值无效'
        });
      }

      const result = await db.query(
        'UPDATE orders SET status = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *',
        [status, id]
      );

      if (result.rows.length === 0) {
        return res.status(404).json({
          success: false,
          error: '订单不存在'
        });
      }

      res.json({
        success: true,
        message: '订单状态更新成功'
      });
    } catch (error) {
      console.error('更新订单状态错误:', error);
      res.status(500).json({
        success: false,
        error: '更新订单状态失败'
      });
    }
  }
} 