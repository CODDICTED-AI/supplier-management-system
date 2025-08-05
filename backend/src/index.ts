import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import routes from './routes';
import { errorHandler, notFound } from './middlewares/errorHandler';
import { testConnection } from './config/database';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// 中间件
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 静态文件服务
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// API路由
app.use('/api', routes);

// 404处理
app.use(notFound);

// 错误处理
app.use(errorHandler);

// 启动服务器
app.listen(PORT, async () => {
  console.log(`服务器运行在端口 ${PORT}`);
  
  // 测试数据库连接
  await testConnection();
});

export default app; 