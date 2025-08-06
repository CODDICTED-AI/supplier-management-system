import { useState, useEffect } from 'react';
import { 
  getAuthState, 
  clearAuthState, 
  verifyPassword, 
  onLoginSuccess, 
  recordFailedAttempt, 
  isLockedOut 
} from '../utils/auth';

interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
}

interface LoginResult {
  success: boolean;
  error?: string;
}

interface LockoutInfo {
  locked: boolean;
  timeLeft?: number;
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    isLoading: true,
  });

  // 初始化时检查登录状态
  useEffect(() => {
    const checkAuthState = () => {
      const isAuthenticated = getAuthState();
      setAuthState({
        isAuthenticated,
        isLoading: false,
      });
    };

    checkAuthState();
  }, []);

  // 登录方法
  const login = (password: string): LoginResult => {
    // 检查是否被锁定
    const lockout = isLockedOut();
    if (lockout.locked) {
      const minutes = Math.ceil((lockout.timeLeft || 0) / 60);
      return {
        success: false,
        error: `登录已被锁定，请 ${minutes} 分钟后重试`,
      };
    }

    // 验证密码
    if (verifyPassword(password)) {
      onLoginSuccess();
      setAuthState({
        isAuthenticated: true,
        isLoading: false,
      });
      return { success: true };
    } else {
      recordFailedAttempt();
      return {
        success: false,
        error: '密码错误，请重试',
      };
    }
  };

  // 登出方法
  const logout = () => {
    clearAuthState();
    setAuthState({
      isAuthenticated: false,
      isLoading: false,
    });
  };

  // 获取锁定信息
  const getLockoutInfo = (): LockoutInfo => {
    return isLockedOut();
  };

  return {
    isAuthenticated: authState.isAuthenticated,
    isLoading: authState.isLoading,
    login,
    logout,
    getLockoutInfo,
  };
};