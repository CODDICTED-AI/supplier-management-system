# 农福尚汇客户管理系统

一个现代化的供应商和订单管理系统，采用 React + Node.js + PostgreSQL 技术栈构建。

## ✨ 系统特性

- 🔐 **安全认证**: 密码保护访问，会话管理，防暴力破解
- 🏢 **供应商管理**: 完整的供应商信息管理，支持合同文件上传
- 📦 **订单管理**: 订单创建、跟踪、状态管理
- 🔍 **智能搜索**: 支持按公司名称、产品名称等条件搜索
- 📊 **数据统计**: 自动计算订单总金额，支持分页显示
- 📱 **响应式设计**: 适配各种设备屏幕
- 🔒 **安全可靠**: 数据验证、错误处理、SQL 注入防护
- ☁️ **云端部署**: 支持一键部署到云平台

## 🛠️ 技术栈

### 前端
- **React 18** + **TypeScript**
- **Ant Design** - UI 组件库
- **React Router** - 路由管理
- **Axios** - HTTP 客户端
- **Day.js** - 日期处理

### 后端
- **Node.js** + **Express** + **TypeScript**
- **PostgreSQL** - 数据库（支持 Supabase）
- **Multer** - 文件上传处理
- **CORS** - 跨域支持

### 部署
- **Vercel** - 前端托管
- **Render** - 后端托管
- **Supabase** - 数据库服务

## 🚀 快速开始

### 方式一：使用快速部署脚本（推荐）

1. 双击运行 `快速部署脚本.bat`
2. 按照脚本提示完成准备工作
3. 参考 `完整部署指南.md` 进行云部署

### 方式二：手动部署

#### 1. 克隆项目
```bash
git clone https://github.com/CODDICTED-AI/supplier-management-system.git
cd supplier-management-system
```

#### 2. 安装依赖
```bash
# 安装后端依赖
cd backend
npm install

# 安装前端依赖
cd ../frontend
npm install
```

#### 3. 配置环境变量
```bash
# 复制环境变量配置文件
cp frontend/env.example frontend/.env.local

# 编辑配置文件，设置登录密码等
# REACT_APP_LOGIN_PASSWORD=your_secure_password
```

参考 `环境变量配置模板.md` 配置必要的环境变量。

**重要**: 请修改默认登录密码 `admin123` 为您的安全密码！

#### 4. 启动开发服务器
```bash
# 启动后端（端口 3001）
cd backend
npm run dev

# 启动前端（端口 3000）
cd frontend
npm start
```

## 📚 部署指南

### 云部署（推荐）
- 📖 [完整部署指南](完整部署指南.md) - 详细的云部署步骤
- ⚙️ [环境变量配置模板](环境变量配置模板.md) - 环境变量配置说明
- 🚀 [快速部署脚本](快速部署脚本.bat) - 自动化部署准备

### 本地部署
1. 安装 PostgreSQL 数据库
2. 运行 `backend/database/init.sql` 创建数据库表
3. 配置环境变量
4. 启动前后端服务

## 📁 项目结构

```
supplier-management-system/
├── frontend/                 # React 前端
│   ├── src/
│   │   ├── components/      # 组件
│   │   ├── pages/          # 页面
│   │   ├── services/       # API 服务
│   │   └── types/          # TypeScript 类型定义
│   └── package.json
├── backend/                 # Node.js 后端
│   ├── src/
│   │   ├── controllers/    # 控制器
│   │   ├── middlewares/    # 中间件
│   │   ├── routes/         # 路由
│   │   ├── types/          # TypeScript 类型定义
│   │   └── config/         # 配置文件
│   ├── database/           # 数据库脚本
│   └── package.json
├── 完整部署指南.md          # 详细部署指南
├── 环境变量配置模板.md      # 环境变量配置
├── 快速部署脚本.bat         # 自动化部署脚本
└── README.md
```

## 🔧 系统功能

### 安全认证
- ✅ 密码保护访问
- ✅ 会话状态管理（24小时有效期）
- ✅ 登录尝试限制（5次错误锁定5分钟）
- ✅ 优雅的欢迎页面
- ✅ 一键退出登录

### 供应商管理
- ✅ 添加、编辑、删除供应商
- ✅ 供应商信息管理（公司名称、联系人、合同日期等）
- ✅ PDF 合同文件上传
- ✅ 供应商搜索功能

### 订单管理
- ✅ 创建新订单
- ✅ 订单状态管理（未完成/已完成）
- ✅ 订单详情查看
- ✅ 自动计算订单总金额
- ✅ 订单搜索和筛选
- ✅ 分页显示

### 数据安全
- ✅ 输入数据验证
- ✅ SQL 注入防护
- ✅ 文件上传安全检查
- ✅ 错误处理和日志记录

## 🌐 API 接口

### 供应商接口
- `POST /api/suppliers` - 创建供应商
- `GET /api/suppliers` - 获取供应商列表
- `GET /api/suppliers/search` - 搜索供应商
- `PUT /api/suppliers/:id` - 更新供应商
- `DELETE /api/suppliers/:id` - 删除供应商

### 订单接口
- `POST /api/orders` - 创建订单
- `GET /api/orders` - 获取订单列表（支持分页和筛选）
- `GET /api/orders/:id` - 获取订单详情
- `PUT /api/orders/:id/status` - 更新订单状态

### 健康检查
- `GET /api/health` - 服务健康检查

## 🔒 安全特性

- **数据验证**: 前后端双重数据验证
- **SQL 注入防护**: 使用参数化查询
- **文件上传安全**: 限制文件类型和大小
- **CORS 配置**: 安全的跨域访问控制
- **错误处理**: 完善的错误处理机制

## 🚨 故障排除

### 常见问题

1. **数据库连接失败**
   - 检查环境变量配置
   - 确认数据库服务运行状态

2. **前端无法连接后端**
   - 检查 `REACT_APP_API_URL` 配置
   - 确认后端服务正常运行

3. **文件上传失败**
   - 检查文件大小（限制 5MB）
   - 确认文件格式为 PDF

4. **部署失败**
   - 查看服务日志获取详细错误信息
   - 参考 `完整部署指南.md`

## 📞 技术支持

如果您在使用过程中遇到问题：

1. 查看 [完整部署指南](完整部署指南.md)
2. 检查 [环境变量配置模板](环境变量配置模板.md)
3. 运行 [快速部署脚本](快速部署脚本.bat) 进行诊断

## 📄 许可证

本项目采用 MIT 许可证。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

**农福尚汇客户管理系统** - 让供应商管理更简单、更高效！ 