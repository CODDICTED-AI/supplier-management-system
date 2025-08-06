import axios from 'axios';

// 获取 API 基础 URL，优先使用环境变量，否则使用后端URL
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://supplier-management-system-3hp8.onrender.com/api';

console.log('API Base URL:', API_BASE_URL);

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 60000, // 增加到60秒超时，应对Render冷启动
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

// 重试函数
const retryRequest = async (originalRequest: any, retries = 3): Promise<any> => {
  for (let i = 0; i < retries; i++) {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1))); // 递增延迟
      return await api(originalRequest);
    } catch (error: any) {
      console.log(`API重试 ${i + 1}/${retries}:`, error.message);
      if (i === retries - 1) throw error;
    }
  }
};

// 响应拦截器
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    console.error('API错误:', error);
    
    // 如果是超时或网络错误，尝试重试
    if (error.code === 'ECONNABORTED' || error.code === 'ERR_NETWORK' || error.response?.status >= 500) {
      console.log('检测到网络错误或服务器错误，准备重试...');
      try {
        return await retryRequest(error.config);
      } catch (retryError) {
        console.error('重试失败:', retryError);
        return Promise.reject(retryError);
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

// 预热API - 在登录成功后调用，唤醒Render服务器
export const warmupApi = async (): Promise<void> => {
  try {
    console.log('正在预热API服务器...');
    const response = await api.get('/health', { timeout: 45000 });
    console.log('API服务器预热成功:', response.data);
  } catch (error) {
    console.warn('API服务器预热失败，但不影响正常使用:', error);
  }
}; 