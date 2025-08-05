# 农福尚汇客户管理系统

这是一个B2B供应商管理系统，主要包含供应商档案管理和订单管理两个核心模块。

## 功能特性

### 供应商管理
- 供应商信息的增删改查
- 合同文件上传（PDF格式）
- 供应商搜索功能
- 合同日期管理
- 物流类型设置

### 订单管理
- 订单的创建和管理
- 订单状态跟踪（未完成/已完成）
- 分页显示和筛选
- 订单详情查看
- 按公司名称和产品名称搜索

## 技术栈

### 前端
- React 18
- TypeScript
- Ant Design
- React Router
- Axios
- Day.js

### 后端
- Node.js
- Express
- TypeScript
- MySQL
- Multer (文件上传)
- CORS

## 项目结构

```
project-root/
├── frontend/                 # 前端项目
│   ├── src/
│   │   ├── components/       # 组件
│   │   │   ├── SupplierManagement/
│   │   │   └── OrderManagement/
│   │   ├── pages/           # 页面
│   │   ├── services/        # API服务
│   │   ├── types/           # TypeScript类型
│   │   └── utils/           # 工具函数
│   └── public/
├── backend/                  # 后端项目
│   ├── src/
│   │   ├── controllers/     # 控制器
│   │   ├── models/          # 数据模型
│   │   ├── routes/          # 路由
│   │   ├── middlewares/     # 中间件
│   │   ├── config/          # 配置
│   │   └── utils/           # 工具函数
│   ├── uploads/             # 文件上传目录
│   └── database/            # 数据库脚本
└── README.md
```

## 安装和运行

### 1. 克隆项目
```bash
git clone <repository-url>
cd aaaa管理系统
```

### 2. 安装依赖
```bash
# 安装后端依赖
cd backend
npm install

# 安装前端依赖
cd ../frontend
npm install
```

### 3. 数据库设置
1. 安装MySQL数据库（推荐8.0版本）
2. 启动MySQL服务
3. 运行数据库设置脚本：
```bash
# Windows
setup-database.bat

# 或者手动执行：
mysql -u root -p -e "CREATE DATABASE supplier_management CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
mysql -u root -p supplier_management < backend/database/init.sql
```

### 4. 配置环境变量
在 `backend` 目录下创建 `.env` 文件（参考 `env.example`）：
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=supplier_management
PORT=3001
UPLOAD_PATH=./uploads
```

### 3. 后端设置
```bash
cd backend
npm install
```

创建 `.env` 文件（参考 `env.example`）：
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=supplier_management
PORT=3001
UPLOAD_PATH=./uploads
```

### 5. 启动服务

#### 方式一：使用启动脚本（推荐）
```bash
# Windows
start.bat
```

#### 方式二：手动启动
```bash
# 启动后端服务
cd backend
npm run dev

# 新开一个终端，启动前端服务
cd frontend
npm start
```

## 使用说明

### 供应商管理
1. 点击左侧菜单"供应商管理"
2. 可以查看所有供应商列表
3. 点击"添加供应商"创建新供应商
4. 支持搜索、编辑、删除操作
5. 可以上传PDF格式的合同文件

### 订单管理
1. 点击左侧菜单"订单管理"
2. 可以查看所有订单列表
3. 支持按状态筛选（全部/未完成/已完成）
4. 点击"添加订单"创建新订单
5. 可以查看订单详情和完成订单

## API接口

### 供应商接口
- `GET /api/suppliers` - 获取所有供应商
- `GET /api/suppliers/search?keyword=xxx` - 搜索供应商
- `POST /api/suppliers` - 创建供应商
- `PUT /api/suppliers/:id` - 更新供应商
- `DELETE /api/suppliers/:id` - 删除供应商

### 订单接口
- `GET /api/orders` - 获取订单列表（支持分页和筛选）
- `GET /api/orders/:id` - 获取订单详情
- `POST /api/orders` - 创建订单
- `PUT /api/orders/:id/status` - 更新订单状态

## 开发注意事项

1. **数据验证**：前后端都进行了数据验证
2. **错误处理**：统一的错误处理机制
3. **文件上传**：只支持PDF格式，最大5MB
4. **安全考虑**：SQL注入防护、CORS配置等
5. **性能优化**：数据库索引、分页查询等

## 部署

### 生产环境部署
1. 构建前端：
```bash
cd frontend
npm run build
```

2. 构建后端：
```bash
cd backend
npm run build
```

3. 配置生产环境变量
4. 使用PM2或其他进程管理器启动服务

## 许可证

MIT License 