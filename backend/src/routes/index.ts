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
  try {
    const filename = req.params.filename;
    const filepath = path.join(process.cwd(), 'uploads', 'contracts', filename);
    
    console.log('尝试下载文件:', filepath);
    
    // 检查文件是否存在
    if (!fs.existsSync(filepath)) {
      console.error('文件不存在:', filepath);
      return res.status(404).json({
        success: false,
        error: '文件不存在'
      });
    }

    // 获取文件信息
    const stats = fs.statSync(filepath);
    console.log('文件信息:', { size: stats.size, path: filepath });

    // 设置响应头
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${encodeURIComponent(filename)}"`);
    res.setHeader('Content-Length', stats.size);

    // 发送文件
    res.download(filepath, filename, (err) => {
      if (err) {
        console.error('文件下载错误:', err);
        if (!res.headersSent) {
          res.status(500).json({
            success: false,
            error: '文件下载失败'
          });
        }
      }
    });
  } catch (error) {
    console.error('下载处理错误:', error);
    res.status(500).json({
      success: false,
      error: '服务器错误'
    });
  }
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