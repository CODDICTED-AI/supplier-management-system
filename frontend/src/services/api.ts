import axios from 'axios';
import { message } from 'antd';

// 获取 API 基础 URL，优先使用环境变量，否则使用部署的后端URL
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://supplier-management-system-3hp8.onrender.com/api';

console.log('API基础URL:', API_BASE_URL);

// 重试请求函数
const retryRequest = async (config: any, maxRetries = 3): Promise<any> => {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await axios(config);
      return response;
    } catch (error: any) {
      console.log(`请求失败，第${i + 1}次重试...`, error.message);
      
      if (i === maxRetries - 1) {
        throw error;
      }
      
      // 等待一段时间后重试
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
    }
  }
};

// API预热函数
export const warmupApi = async () => {
  try {
    console.log('开始API预热...');
    await api.get('/health');
    console.log('API预热成功');
  } catch (error) {
    console.warn('API预热失败，但会继续尝试:', error);
  }
};

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 60000, // 增加到60秒
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
  async (error) => {
    console.error('API错误:', error);
    
    // 如果是网络错误或服务器错误，尝试重试
    if (error.code === 'NETWORK_ERROR' || 
        error.code === 'ECONNABORTED' ||
        (error.response && error.response.status >= 500)) {
      try {
        console.log('检测到网络或服务器错误，尝试重试...');
        const response = await retryRequest(error.config);
        return response;
      } catch (retryError) {
        console.error('重试失败:', retryError);
        message.error('网络连接失败，请检查网络或稍后重试');
      }
    }
    
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