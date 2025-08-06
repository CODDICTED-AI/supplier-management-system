import express from 'express';
import path from 'path';
import fs from 'fs';
import { SupplierController } from '../controllers/supplierController';
import { OrderController } from '../controllers/orderController';
import { upload } from '../middlewares/upload';

const router = express.Router();
const supplierController = new SupplierController();
const orderController = new OrderController();

// 供应商路由
router.post('/suppliers', upload.single('contract_file'), supplierController.createSupplier.bind(supplierController));
router.get('/suppliers', supplierController.getSuppliers.bind(supplierController));
router.get('/suppliers/search', supplierController.searchSuppliers.bind(supplierController));
router.put('/suppliers/:id', upload.single('contract_file'), supplierController.updateSupplier.bind(supplierController));
router.delete('/suppliers/:id', supplierController.deleteSupplier.bind(supplierController));

// 文件下载路由
router.get('/files/download/:filename', (req, res) => {
  const filename = req.params.filename;
  const filepath = path.join(__dirname, '../uploads/contracts', filename);
  
  // 检查文件是否存在
  if (!fs.existsSync(filepath)) {
    return res.status(404).json({
      success: false,
      error: '文件不存在'
    });
  }

  // 设置下载头
  res.download(filepath, (err) => {
    if (err) {
      console.error('文件下载错误:', err);
      res.status(500).json({
        success: false,
        error: '文件下载失败'
      });
    }
  });
});

// 订单路由
router.post('/orders', orderController.createOrder.bind(orderController));
router.get('/orders', orderController.getOrders.bind(orderController));
router.get('/orders/:id', orderController.getOrderDetail.bind(orderController));
router.put('/orders/:id/status', orderController.updateOrderStatus.bind(orderController));

// 健康检查端点
router.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

export default router; 