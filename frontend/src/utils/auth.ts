// 认证相关工具函数

// 从环境变量获取密码，fallback到默认密码
export const getAuthPassword = (): string => {
  return process.env.REACT_APP_LOGIN_PASSWORD || 'admin123';
};

// 本地存储key
const AUTH_STORAGE_KEY = 'supplier_management_auth';
const AUTH_TIMESTAMP_KEY = 'supplier_management_auth_timestamp';

// 会话过期时间（24小时）
const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24小时毫秒数

// 验证密码
export const verifyPassword = (inputPassword: string): boolean => {
  const correctPassword = getAuthPassword();
  return inputPassword === correctPassword;
};

// 保存登录状态到本地存储
export const saveAuthState = (): void => {
  const timestamp = Date.now();
  localStorage.setItem(AUTH_STORAGE_KEY, 'true');
  localStorage.setItem(AUTH_TIMESTAMP_KEY, timestamp.toString());
};

// 从本地存储获取登录状态
export const getAuthState = (): boolean => {
  try {
    const isAuthenticated = localStorage.getItem(AUTH_STORAGE_KEY) === 'true';
    const timestamp = localStorage.getItem(AUTH_TIMESTAMP_KEY);
    
    if (!isAuthenticated || !timestamp) {
      return false;
    }
    
    // 检查是否过期
    const now = Date.now();
    const authTime = parseInt(timestamp, 10);
    const isExpired = (now - authTime) > SESSION_DURATION;
    
    if (isExpired) {
      clearAuthState();
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Error reading auth state:', error);
    return false;
  }
};

// 清除登录状态
export const clearAuthState = (): void => {
  localStorage.removeItem(AUTH_STORAGE_KEY);
  localStorage.removeItem(AUTH_TIMESTAMP_KEY);
};

// 登录尝试限制相关
const LOGIN_ATTEMPTS_KEY = 'supplier_management_login_attempts';
const LOGIN_LOCKOUT_KEY = 'supplier_management_login_lockout';
const MAX_ATTEMPTS = 5;
const LOCKOUT_DURATION = 5 * 60 * 1000; // 5分钟

// 记录登录失败尝试
export const recordFailedAttempt = (): void => {
  const attempts = getLoginAttempts() + 1;
  localStorage.setItem(LOGIN_ATTEMPTS_KEY, attempts.toString());
  
  if (attempts >= MAX_ATTEMPTS) {
    const lockoutTime = Date.now() + LOCKOUT_DURATION;
    localStorage.setItem(LOGIN_LOCKOUT_KEY, lockoutTime.toString());
  }
};

// 获取当前登录尝试次数
export const getLoginAttempts = (): number => {
  const attempts = localStorage.getItem(LOGIN_ATTEMPTS_KEY);
  return attempts ? parseInt(attempts, 10) : 0;
};

// 检查是否被锁定
export const isLockedOut = (): { locked: boolean; timeLeft?: number } => {
  const lockoutTime = localStorage.getItem(LOGIN_LOCKOUT_KEY);
  if (!lockoutTime) {
    return { locked: false };
  }
  
  const now = Date.now();
  const lockout = parseInt(lockoutTime, 10);
  
  if (now < lockout) {
    const timeLeft = Math.ceil((lockout - now) / 1000); // 剩余秒数
    return { locked: true, timeLeft };
  } else {
    // 锁定时间已过，清除锁定状态
    clearLoginAttempts();
    return { locked: false };
  }
};

// 清除登录尝试记录
export const clearLoginAttempts = (): void => {
  localStorage.removeItem(LOGIN_ATTEMPTS_KEY);
  localStorage.removeItem(LOGIN_LOCKOUT_KEY);
};

// 登录成功后清除尝试记录
export const onLoginSuccess = (): void => {
  saveAuthState();
  clearLoginAttempts();
};