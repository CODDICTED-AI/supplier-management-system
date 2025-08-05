export interface Supplier {
  id?: number;
  company_name: string;
  contact_person: string;
  contract_start_date?: string;
  contract_end_date?: string;
  logistics_type: '随货' | '独立';
  contract_file_path?: string;
  created_at?: string;
  updated_at?: string;
}

export interface SupplierProduct {
  id?: number;
  supplier_id: number;
  product_name: string;
  supply_price: number;
  created_at?: string;
}

export interface Order {
  id?: number;
  supplier_id: number;
  order_contact: string;
  product_name: string;
  order_date: string;
  unit_price: number;
  quantity: number;
  total_amount?: number;
  expected_delivery_date?: string;
  status: '未完成' | '已完成';
  created_at?: string;
  updated_at?: string;
}

export interface OrderWithSupplier extends Order {
  company_name?: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginationParams {
  page: number;
  limit: number;
  status?: string;
  keyword?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
} 