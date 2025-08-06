-- PostgreSQL 数据库初始化脚本
-- 适用于 Supabase

-- 1. 供应商表 (suppliers)
CREATE TABLE IF NOT EXISTS suppliers (
  id SERIAL PRIMARY KEY,
  company_name VARCHAR(255) NOT NULL UNIQUE,
  contact_person VARCHAR(100) NOT NULL,
  contract_start_date DATE,
  contract_end_date DATE,
  logistics_type VARCHAR(10) DEFAULT '随货' CHECK (logistics_type IN ('随货', '独立')),
  contract_file_path VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. 供应商产品表 (supplier_products)
CREATE TABLE IF NOT EXISTS supplier_products (
  id SERIAL PRIMARY KEY,
  supplier_id INTEGER NOT NULL,
  product_name VARCHAR(255) NOT NULL,
  supply_price DECIMAL(10,2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (supplier_id) REFERENCES suppliers(id) ON DELETE CASCADE
);

-- 3. 订单表 (orders)
CREATE TABLE IF NOT EXISTS orders (
  id SERIAL PRIMARY KEY,
  supplier_id INTEGER NOT NULL,
  order_contact VARCHAR(100) NOT NULL,
  product_name VARCHAR(255) NOT NULL,
  order_date DATE NOT NULL,
  unit_price DECIMAL(10,2) NOT NULL,
  quantity INTEGER NOT NULL,
  total_amount DECIMAL(10,2) GENERATED ALWAYS AS (unit_price * quantity) STORED,
  expected_delivery_date DATE,
  status VARCHAR(10) DEFAULT '未完成' CHECK (status IN ('未完成', '已完成')),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (supplier_id) REFERENCES suppliers(id)
);

-- 创建索引
CREATE INDEX IF NOT EXISTS idx_suppliers_company_name ON suppliers(company_name);
CREATE INDEX IF NOT EXISTS idx_orders_supplier_id ON orders(supplier_id);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_orders_order_date ON orders(order_date);

-- 创建更新时间触发器
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- 删除已存在的触发器（如果存在）
DROP TRIGGER IF EXISTS update_suppliers_updated_at ON suppliers;
DROP TRIGGER IF EXISTS update_orders_updated_at ON orders;

-- 创建触发器
CREATE TRIGGER update_suppliers_updated_at BEFORE UPDATE ON suppliers
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_orders_updated_at BEFORE UPDATE ON orders
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column(); 