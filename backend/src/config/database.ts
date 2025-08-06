import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

// 创建数据库连接池
const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'postgres',
  port: parseInt(process.env.DB_PORT || '5432'),
  ssl: process.env.DB_SSL === 'true' ? {
    rejectUnauthorized: false
  } : undefined,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

export const db = pool;

// 测试数据库连接
export const testConnection = async () => {
  try {
    const client = await pool.connect();
    console.log('数据库连接成功');
    client.release();
  } catch (error) {
    console.error('数据库连接失败:', error);
  }
}; 