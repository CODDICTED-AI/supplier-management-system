# 农福尚汇客户管理系统 - 云部署指南
## Vercel + Railway + PlanetScale 方案

### 第一步：准备 GitHub 仓库

1. **创建 GitHub 账号**（如果还没有）
   - 访问 https://github.com
   - 注册新账号

2. **创建新仓库**
   - 点击 "New repository"
   - 仓库名：`supplier-management-system`
   - 选择 "Public"
   - 不要初始化 README

3. **上传代码到 GitHub**
   ```bash
   # 在项目根目录执行
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/你的用户名/supplier-management-system.git
   git push -u origin main
   ```

### 第二步：设置 PlanetScale 数据库

1. **注册 PlanetScale 账号**
   - 访问 https://planetscale.com
   - 点击 "Sign up" 注册账号

2. **创建数据库**
   - 点击 "New database"
   - 数据库名：`supplier_management`
   - 选择免费计划
   - 选择离您最近的区域

3. **获取连接信息**
   - 点击数据库名称进入详情页
   - 点击 "Connect" 按钮
   - 选择 "Connect with Prisma" 或 "Connect with MySQL"
   - 记录以下信息：
     - Host
     - Username
     - Password
     - Database name

4. **创建数据库表**
   - 点击 "Console" 标签
   - 复制 `backend/database/init.sql` 的内容
   - 粘贴到 SQL 编辑器中执行

### 第三步：部署后端到 Railway

1. **注册 Railway 账号**
   - 访问 https://railway.app
   - 使用 GitHub 账号登录

2. **创建新项目**
   - 点击 "New Project"
   - 选择 "Deploy from GitHub repo"
   - 选择您的仓库

3. **配置项目**
   - 选择 `backend` 目录作为根目录
   - 点击 "Deploy Now"

4. **设置环境变量**
   - 在项目详情页点击 "Variables" 标签
   - 添加以下环境变量：
   ```
   DB_HOST=你的PlanetScale主机地址
   DB_USER=你的PlanetScale用户名
   DB_PASSWORD=你的PlanetScale密码
   DB_NAME=supplier_management
   DB_SSL=true
   PORT=3001
   UPLOAD_PATH=./uploads
   ```

5. **获取部署 URL**
   - 部署完成后，Railway 会提供一个 URL
   - 例如：`https://your-app-name.railway.app`
   - 记录这个 URL，稍后需要用到

### 第四步：部署前端到 Vercel

1. **注册 Vercel 账号**
   - 访问 https://vercel.com
   - 使用 GitHub 账号登录

2. **导入项目**
   - 点击 "New Project"
   - 选择您的 GitHub 仓库
   - 选择 `frontend` 目录作为根目录

3. **配置项目**
   - Framework Preset: 选择 "Create React App"
   - Build Command: `npm run build`
   - Output Directory: `build`
   - Install Command: `npm install`

4. **设置环境变量**
   - 在项目设置中添加环境变量：
   ```
   REACT_APP_API_URL=https://你的Railway应用URL/api
   ```

5. **部署**
   - 点击 "Deploy"
   - 等待部署完成

### 第五步：测试系统

1. **访问前端**
   - Vercel 会提供一个 URL
   - 例如：`https://your-app-name.vercel.app`

2. **测试功能**
   - 测试供应商管理功能
   - 测试订单管理功能
   - 确认数据能正常保存和读取

### 第六步：分享给远程用户

1. **分享前端地址**
   - 将 Vercel 提供的 URL 发给远程用户
   - 例如：`https://your-app-name.vercel.app`

2. **用户访问**
   - 远程用户打开浏览器
   - 输入您分享的 URL
   - 即可开始使用系统

### 常见问题解决

#### 1. 数据库连接失败
- 检查 PlanetScale 连接信息是否正确
- 确认环境变量已正确设置
- 检查数据库表是否已创建

#### 2. 前端无法访问后端
- 确认 `REACT_APP_API_URL` 环境变量设置正确
- 检查 Railway 应用是否正常运行
- 查看 Railway 日志排查问题

#### 3. 部署失败
- 检查代码是否有语法错误
- 确认所有依赖都已安装
- 查看部署日志获取详细错误信息

### 维护建议

1. **定期备份数据**
   - PlanetScale 提供自动备份
   - 也可以手动导出数据

2. **监控应用状态**
   - Railway 和 Vercel 都提供监控面板
   - 定期检查应用运行状态

3. **更新代码**
   - 推送代码到 GitHub 会自动触发重新部署
   - 确保测试通过后再部署到生产环境

### 费用说明

- **Vercel**: 免费计划包含每月 100GB 带宽
- **Railway**: 免费计划包含每月 $5 额度
- **PlanetScale**: 免费计划包含 1GB 存储和 1亿行数据

对于小型项目，免费计划完全够用。 