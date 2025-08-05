import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

export const api = axios.create({
  baseURL: API_BASE_URL,
});

// 请求拦截器
api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('API错误:', error);
    return Promise.reject(error);
  }
);

export const supplierApi = {
  getAll: () => api.get('/suppliers'),
  search: (keyword: string) => api.get(`/suppliers/search?keyword=${encodeURIComponent(keyword)}`),
  create: (data: any) => api.post('/suppliers', data),
  update: (id: number, data: any) => api.put(`/suppliers/${id}`, data),
  delete: (id: number) => api.delete(`/suppliers/${id}`),
};

export const orderApi = {
  getAll: (page: number, status?: string, keyword?: string) => {
    const params = new URLSearchParams();
    params.append('page', page.toString());
    if (status && status !== 'all') {
      params.append('status', status);
    }
    if (keyword) {
      params.append('keyword', keyword);
    }
    return api.get(`/orders?${params.toString()}`);
  },
  getDetail: (id: number) => api.get(`/orders/${id}`),
  create: (data: any) => api.post('/orders', data),
  updateStatus: (id: number, status: string) => 
    api.put(`/orders/${id}/status`, { status }),
}; 