import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { warmupApi } from '../services/api';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (password: string) => Promise<boolean>;
  logout: () => void;
  failedAttempts: number;
  isLocked: boolean;
  lockTimeRemaining: number;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 正确的密码 - 在实际生产环境中应该从服务器验证
const CORRECT_PASSWORD = process.env.REACT_APP_LOGIN_PASSWORD || 'nongfushanghui2024';
const MAX_ATTEMPTS = 3;
const LOCK_DURATION = 5 * 60 * 1000; // 5分钟
const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24小时

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [lockTime, setLockTime] = useState<number | null>(null);
  const [lockTimeRemaining, setLockTimeRemaining] = useState(0);

  // 检查本地存储的登录状态
  useEffect(() => {
    const stored = localStorage.getItem('auth_status');
    const sessionTime = localStorage.getItem('session_time');
    const storedAttempts = localStorage.getItem('failed_attempts');
    const storedLockTime = localStorage.getItem('lock_time');

    // 检查会话是否过期
    if (stored === 'authenticated' && sessionTime) {
      const sessionStart = parseInt(sessionTime);
      const now = Date.now();
      if (now - sessionStart < SESSION_DURATION) {
        setIsAuthenticated(true);
      } else {
        // 会话过期，清除状态
        localStorage.removeItem('auth_status');
        localStorage.removeItem('session_time');
        setIsAuthenticated(false);
      }
    }

    if (storedAttempts) {
      setFailedAttempts(parseInt(storedAttempts));
    }

    if (storedLockTime) {
      const lockTimeValue = parseInt(storedLockTime);
      const now = Date.now();
      if (now < lockTimeValue) {
        setLockTime(lockTimeValue);
      } else {
        // 锁定时间已过，清除锁定状态
        localStorage.removeItem('lock_time');
        localStorage.removeItem('failed_attempts');
        setFailedAttempts(0);
      }
    }
  }, []);

  // 锁定倒计时
  useEffect(() => {
    if (lockTime) {
      const interval = setInterval(() => {
        const remaining = Math.max(0, lockTime - Date.now());
        setLockTimeRemaining(remaining);

        if (remaining === 0) {
          setLockTime(null);
          setFailedAttempts(0);
          localStorage.removeItem('lock_time');
          localStorage.removeItem('failed_attempts');
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [lockTime]);

  const login = async (password: string): Promise<boolean> => {
    const now = Date.now();
    
    // 检查是否被锁定
    if (lockTime && now < lockTime) {
      return false;
    }

    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      setFailedAttempts(0);
      localStorage.setItem('auth_status', 'authenticated');
      localStorage.setItem('session_time', Date.now().toString());
      localStorage.removeItem('failed_attempts');
      localStorage.removeItem('lock_time');
      
      // 登录成功后进行API预热
      try {
        await warmupApi();
      } catch (error) {
        console.warn('API预热失败:', error);
      }
      
      return true;
    } else {
      const newAttempts = failedAttempts + 1;
      setFailedAttempts(newAttempts);
      localStorage.setItem('failed_attempts', newAttempts.toString());

      // 如果达到最大尝试次数，锁定账户
      if (newAttempts >= MAX_ATTEMPTS) {
        const lockUntil = now + LOCK_DURATION;
        setLockTime(lockUntil);
        localStorage.setItem('lock_time', lockUntil.toString());
      }

      return false;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('auth_status');
    localStorage.removeItem('session_time');
  };

  const isLocked = lockTime !== null && Date.now() < lockTime;

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        failedAttempts,
        isLocked,
        lockTimeRemaining
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};