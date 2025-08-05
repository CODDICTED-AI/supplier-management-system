# 农福尚汇客户管理系统开发文档

## 项目概述

本项目是一个B2B供应商管理系统，主要包含供应商档案管理和订单管理两个核心模块。系统需要支持供应商信息的增删改查、合同文件上传、订单生命周期管理等功能。

## 技术栈建议

**前端：** React + TypeScript + Ant Design
**后端：** Node.js + Express + TypeScript
**数据库：** MySQL 或 PostgreSQL
**文件存储：** 本地存储或云存储服务
**状态管理：** Redux Toolkit 或 Zustand

## 数据库设计

### 1. 供应商表 (suppliers)
```sql
CREATE TABLE suppliers (
  id INT PRIMARY KEY AUTO_INCREMENT,
  company_name VARCHAR(255) NOT NULL UNIQUE,
  contact_person VARCHAR(100) NOT NULL,
  contract_start_date DATE,
  contract_end_date DATE,
  logistics_type ENUM('随货', '独立') DEFAULT '随货',
  contract_file_path VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### 2. 供应商产品表 (supplier_products)
```sql
CREATE TABLE supplier_products (
  id INT PRIMARY KEY AUTO_INCREMENT,
  supplier_id INT NOT NULL,
  product_name VARCHAR(255) NOT NULL,
  supply_price DECIMAL(10,2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (supplier_id) REFERENCES suppliers(id) ON DELETE CASCADE
);
```

### 3. 订单表 (orders)
```sql
CREATE TABLE orders (
  id INT PRIMARY KEY AUTO_INCREMENT,
  supplier_id INT NOT NULL,
  order_contact VARCHAR(100) NOT NULL,
  product_name VARCHAR(255) NOT NULL,
  order_date DATE NOT NULL,
  unit_price DECIMAL(10,2) NOT NULL,
  quantity INT NOT NULL,
  total_amount DECIMAL(10,2) GENERATED ALWAYS AS (unit_price * quantity),
  expected_delivery_date DATE,
  status ENUM('未完成', '已完成') DEFAULT '未完成',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (supplier_id) REFERENCES suppliers(id)
);
```

## 开发实现步骤

### 阶段1：项目初始化和基础架构

#### 步骤1.1：创建项目结构
```bash
# 创建前端项目
npx create-react-app frontend --template typescript
cd frontend && npm install antd @types/node

# 创建后端项目
mkdir backend && cd backend
npm init -y
npm install express typescript @types/express @types/node ts-node nodemon
npm install mysql2 multer @types/multer cors @types/cors
```

#### 步骤1.2：配置项目目录结构
```
project-root/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── SupplierManagement/
│   │   │   └── OrderManagement/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── types/
│   │   └── utils/
│   └── public/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middlewares/
│   │   └── utils/
│   └── uploads/
└── README.md
```

### 阶段2：后端API开发

#### 步骤2.1：创建数据库连接
```typescript
// backend/src/config/database.ts
import mysql from 'mysql2/promise';

export const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'supplier_management'
});
```

#### 步骤2.2：定义TypeScript接口
```typescript
// backend/src/types/index.ts
export interface Supplier {
  id?: number;
  company_name: string;
  contact_person: string;
  contract_start_date?: string;
  contract_end_date?: string;
  logistics_type: '随货' | '独立';
  contract_file_path?: string;
}

export interface SupplierProduct {
  id?: number;
  supplier_id: number;
  product_name: string;
  supply_price: number;
}

export interface Order {
  id?: number;
  supplier_id: number;
  order_contact: string;
  product_name: string;
  order_date: string;
  unit_price: number;
  quantity: number;
  expected_delivery_date?: string;
  status: '未完成' | '已完成';
}
```

#### 步骤2.3：实现供应商相关API
```typescript
// backend/src/controllers/supplierController.ts
import { Request, Response } from 'express';
import { db } from '../config/database';

export class SupplierController {
  // 创建供应商
  async createSupplier(req: Request, res: Response) {
    // 实现供应商创建逻辑
  }
  
  // 获取所有供应商
  async getSuppliers(req: Request, res: Response) {
    // 实现供应商列表查询
  }
  
  // 搜索供应商
  async searchSuppliers(req: Request, res: Response) {
    // 实现模糊搜索功能
  }
  
  // 更新供应商
  async updateSupplier(req: Request, res: Response) {
    // 实现供应商信息更新
  }
  
  // 删除供应商
  async deleteSupplier(req: Request, res: Response) {
    // 实现供应商删除
  }
}
```

#### 步骤2.4：实现订单相关API
```typescript
// backend/src/controllers/orderController.ts
export class OrderController {
  // 创建订单
  async createOrder(req: Request, res: Response) {
    // 实现订单创建逻辑
  }
  
  // 获取订单列表（支持分页和状态筛选）
  async getOrders(req: Request, res: Response) {
    // 实现订单列表查询，支持分页、状态筛选、搜索
  }
  
  // 获取订单详情
  async getOrderDetail(req: Request, res: Response) {
    // 实现订单详情查询
  }
  
  // 更新订单状态
  async updateOrderStatus(req: Request, res: Response) {
    // 实现订单状态更新（完成/未完成）
  }
}
```

#### 步骤2.5：设置路由
```typescript
// backend/src/routes/index.ts
import express from 'express';
import { SupplierController } from '../controllers/supplierController';
import { OrderController } from '../controllers/orderController';

const router = express.Router();
const supplierController = new SupplierController();
const orderController = new OrderController();

// 供应商路由
router.post('/suppliers', supplierController.createSupplier);
router.get('/suppliers', supplierController.getSuppliers);
router.get('/suppliers/search', supplierController.searchSuppliers);
router.put('/suppliers/:id', supplierController.updateSupplier);
router.delete('/suppliers/:id', supplierController.deleteSupplier);

// 订单路由
router.post('/orders', orderController.createOrder);
router.get('/orders', orderController.getOrders);
router.get('/orders/:id', orderController.getOrderDetail);
router.put('/orders/:id/status', orderController.updateOrderStatus);

export default router;
```

### 阶段3：前端开发

#### 步骤3.1：创建基础组件和服务
```typescript
// frontend/src/services/api.ts
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api';

export const api = axios.create({
  baseURL: API_BASE_URL,
});

export const supplierApi = {
  getAll: () => api.get('/suppliers'),
  search: (keyword: string) => api.get(`/suppliers/search?keyword=${keyword}`),
  create: (data: any) => api.post('/suppliers', data),
  update: (id: number, data: any) => api.put(`/suppliers/${id}`, data),
  delete: (id: number) => api.delete(`/suppliers/${id}`),
};

export const orderApi = {
  getAll: (page: number, status?: string, keyword?: string) => 
    api.get(`/orders?page=${page}&status=${status}&keyword=${keyword}`),
  getDetail: (id: number) => api.get(`/orders/${id}`),
  create: (data: any) => api.post('/orders', data),
  updateStatus: (id: number, status: string) => 
    api.put(`/orders/${id}/status`, { status }),
};
```

#### 步骤3.2：实现供应商管理页面
```tsx
// frontend/src/components/SupplierManagement/SupplierList.tsx
import React, { useState, useEffect } from 'react';
import { Table, Button, Input, Modal, Form, Select, Upload } from 'antd';
import { supplierApi } from '../../services/api';

export const SupplierList: React.FC = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  
  // 实现供应商列表、搜索、添加、编辑、删除功能
  
  return (
    <div>
      {/* 搜索栏 */}
      <Input.Search
        placeholder="输入公司名称搜索"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
        onSearch={handleSearch}
        style={{ width: 300, marginBottom: 16 }}
      />
      
      {/* 添加按钮 */}
      <Button type="primary" onClick={() => setModalVisible(true)}>
        添加供应商
      </Button>
      
      {/* 供应商表格 */}
      <Table
        dataSource={suppliers}
        loading={loading}
        columns={columns}
        rowKey="id"
      />
      
      {/* 添加/编辑供应商模态框 */}
      <Modal>
        {/* 表单内容 */}
      </Modal>
    </div>
  );
};
```

#### 步骤3.3：实现订单管理页面
```tsx
// frontend/src/components/OrderManagement/OrderList.tsx
import React, { useState, useEffect } from 'react';
import { Table, Button, Input, Select, Pagination, Modal } from 'antd';
import { orderApi } from '../../services/api';

export const OrderList: React.FC = () => {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchKeyword, setSearchKeyword] = useState('');
  
  // 实现订单列表、分页、筛选、搜索功能
  
  return (
    <div>
      {/* 筛选和搜索栏 */}
      <div style={{ marginBottom: 16 }}>
        <Select
          value={statusFilter}
          onChange={setStatusFilter}
          style={{ width: 120, marginRight: 16 }}
        >
          <Select.Option value="all">历史所有订单</Select.Option>
          <Select.Option value="未完成">未完成订单</Select.Option>
          <Select.Option value="已完成">已完成订单</Select.Option>
        </Select>
        
        <Input.Search
          placeholder="输入公司名称搜索"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          onSearch={handleSearch}
          style={{ width: 300 }}
        />
        
        <Button type="primary" onClick={() => setAddModalVisible(true)}>
          添加订单
        </Button>
      </div>
      
      {/* 订单表格 */}
      <Table
        dataSource={orders}
        columns={orderColumns}
        pagination={false}
        rowKey="id"
        onRow={(record) => ({
          onClick: () => showOrderDetail(record.id),
        })}
      />
      
      {/* 分页 */}
      <Pagination
        current={currentPage}
        pageSize={10}
        onChange={setCurrentPage}
        style={{ marginTop: 16, textAlign: 'right' }}
      />
    </div>
  );
};
```

#### 步骤3.4：实现订单详情页面
```tsx
// frontend/src/components/OrderManagement/OrderDetail.tsx
import React from 'react';
import { Modal, Descriptions, Button } from 'antd';

export const OrderDetail: React.FC = ({ visible, order, onClose, onComplete }) => {
  return (
    <Modal
      title="订单详情"
      visible={visible}
      onCancel={onClose}
      footer={[
        <Button key="close" onClick={onClose}>
          关闭
        </Button>,
        order?.status === '未完成' && (
          <Button key="complete" type="primary" onClick={onComplete}>
            订单完成
          </Button>
        ),
      ]}
    >
      <Descriptions column={1}>
        <Descriptions.Item label="公司名称">{order?.company_name}</Descriptions.Item>
        <Descriptions.Item label="订货联系人">{order?.order_contact}</Descriptions.Item>
        <Descriptions.Item label="供应产品">{order?.product_name}</Descriptions.Item>
        <Descriptions.Item label="订货时间">{order?.order_date}</Descriptions.Item>
        <Descriptions.Item label="订货单价">{order?.unit_price}</Descriptions.Item>
        <Descriptions.Item label="订货数量">{order?.quantity}</Descriptions.Item>
        <Descriptions.Item label="预计到货时间">{order?.expected_delivery_date}</Descriptions.Item>
        <Descriptions.Item label="订单状态">{order?.status}</Descriptions.Item>
      </Descriptions>
    </Modal>
  );
};
```

### 阶段4：集成和优化

#### 步骤4.1：应用主布局
```tsx
// frontend/src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { SupplierManagement } from './pages/SupplierManagement';
import { OrderManagement } from './pages/OrderManagement';

const { Header, Sider, Content } = Layout;

function App() {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider>
          <Menu theme="dark" mode="inline">
            <Menu.Item key="suppliers">
              供应商管理
            </Menu.Item>
            <Menu.Item key="orders">
              订单管理
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header>
            <h1 style={{ color: 'white' }}>农福尚汇客户管理系统</h1>
          </Header>
          <Content style={{ padding: '24px' }}>
            <Routes>
              <Route path="/suppliers" element={<SupplierManagement />} />
              <Route path="/orders" element={<OrderManagement />} />
              <Route path="/" element={<OrderManagement />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
```

#### 步骤4.2：文件上传功能
```typescript
// backend/src/middlewares/upload.ts
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/contracts/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

export const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('只允许上传PDF文件'));
    }
  }
});
```

## 开发注意事项

### 1. 数据验证
- 前后端都需要进行数据验证
- 使用 Joi 或 Yup 进行后端数据验证
- 前端使用 Ant Design 的 Form 验证功能

### 2. 错误处理
- 统一的错误处理中间件
- 友好的用户错误提示
- 日志记录功能

### 3. 安全考虑
- 文件上传安全检查
- SQL注入防护
- CORS配置
- 输入数据清理

### 4. 性能优化
- 数据库索引优化
- 分页查询优化
- 前端虚拟滚动（如需要）
- 图片/文件压缩

## 部署配置

### 1. 环境变量配置
```env
# .env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=supplier_management
PORT=3001
UPLOAD_PATH=./uploads
```

### 2. 数据库迁移脚本
```sql
-- database/migrations/001_initial.sql
-- 包含所有表的创建脚本和初始数据
```

## 测试计划

### 1. 单元测试
- API接口测试
- 数据模型测试
- 工具函数测试

### 2. 集成测试
- 端到端业务流程测试
- 文件上传功能测试
- 搜索功能测试

### 3. 用户验收测试
- 供应商管理流程测试
- 订单管理流程测试
- 数据导入导出测试

这份文档提供了完整的开发路线图，Cursor可以按照这个顺序逐步实现系统的各个功能模块。