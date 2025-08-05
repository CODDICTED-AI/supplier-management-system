-- 创建数据库
CREATE DATABASE IF NOT EXISTS supplier_management CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE supplier_management;

-- 1. 供应商表 (suppliers)
CREATE TABLE IF NOT EXISTS suppliers (
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

-- 2. 供应商产品表 (supplier_products)
CREATE TABLE IF NOT EXISTS supplier_products (
  id INT PRIMARY KEY AUTO_INCREMENT,
  supplier_id INT NOT NULL,
  product_name VARCHAR(255) NOT NULL,
  supply_price DECIMAL(10,2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (supplier_id) REFERENCES suppliers(id) ON DELETE CASCADE
);

-- 3. 订单表 (orders)
CREATE TABLE IF NOT EXISTS orders (
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

-- 创建索引
CREATE INDEX idx_suppliers_company_name ON suppliers(company_name);
CREATE INDEX idx_orders_supplier_id ON orders(supplier_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_order_date ON orders(order_date); 