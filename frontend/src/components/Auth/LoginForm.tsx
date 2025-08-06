import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Alert, Space, message } from 'antd';
import { LockOutlined, EyeInvisibleOutlined, EyeTwoTone, LoadingOutlined } from '@ant-design/icons';
import { useAuth } from '../../hooks/useAuth';

interface LoginFormProps {
  onLoginSuccess?: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [lockoutInfo, setLockoutInfo] = useState<{ locked: boolean; timeLeft?: number }>({ locked: false });
  const { login, getLockoutInfo } = useAuth();

  // 检查锁定状态
  useEffect(() => {
    const checkLockout = () => {
      const info = getLockoutInfo();
      setLockoutInfo(info);
    };

    checkLockout();
    
    // 如果被锁定，每秒更新剩余时间
    let interval: NodeJS.Timeout;
    if (lockoutInfo.locked && lockoutInfo.timeLeft && lockoutInfo.timeLeft > 0) {
      interval = setInterval(() => {
        const info = getLockoutInfo();
        setLockoutInfo(info);
        
        // 如果锁定时间结束，清除错误信息
        if (!info.locked) {
          setError('');
          clearInterval(interval);
        }
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [lockoutInfo.locked, lockoutInfo.timeLeft, getLockoutInfo]);

  const handleSubmit = async (values: { password: string }) => {
    setLoading(true);
    setError('');

    try {
      const result = login(values.password);
      
      if (result.success) {
        message.success('登录成功，正在进入系统...');
        // 延迟一下让用户看到成功消息
        setTimeout(() => {
          onLoginSuccess?.();
        }, 500);
      } else {
        setError(result.error || '登录失败');
        // 重新检查锁定状态
        const info = getLockoutInfo();
        setLockoutInfo(info);
      }
    } catch (err) {
      setError('登录过程中发生错误，请重试');
    } finally {
      setLoading(false);
    }
  };

  const isDisabled = lockoutInfo.locked || loading;

  return (
    <div style={{ width: '100%' }}>
      <Form
        form={form}
        onFinish={handleSubmit}
        layout="vertical"
        size="large"
        className="login-form"
      >
        <Form.Item
          name="password"
          label={<span style={{ color: '#262626', fontWeight: '500' }}>登录密码</span>}
          rules={[
            { required: true, message: '请输入密码' },
            { min: 1, message: '密码不能为空' },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined style={{ color: '#bfbfbf' }} />}
            placeholder="请输入访问密码"
            disabled={isDisabled}
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            onPressEnter={() => form.submit()}
            style={{
              height: '40px',
              borderRadius: '6px',
              fontSize: '14px'
            }}
          />
        </Form.Item>

        {error && (
          <Form.Item>
            <Alert
              message={error}
              type="error"
              showIcon
              style={{ marginBottom: '16px' }}
            />
          </Form.Item>
        )}

        {lockoutInfo.locked && lockoutInfo.timeLeft && (
          <Form.Item>
            <Alert
              message={`登录已被锁定`}
              description={`剩余时间：${Math.ceil(lockoutInfo.timeLeft / 60)} 分 ${lockoutInfo.timeLeft % 60} 秒`}
              type="warning"
              showIcon
              style={{ marginBottom: '16px' }}
            />
          </Form.Item>
        )}

        <Form.Item style={{ marginBottom: '0' }}>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            disabled={isDisabled}
            block
            size="large"
            style={{
              height: '44px',
              borderRadius: '6px',
              fontSize: '16px',
              fontWeight: '500',
              marginTop: '8px'
            }}
          >
            {loading ? '正在登录...' : '登录'}
          </Button>
          
          {!error && !lockoutInfo.locked && (
            <div style={{ 
              textAlign: 'center', 
              fontSize: '12px', 
              color: '#8c8c8c',
              marginTop: '16px',
              lineHeight: '1.5'
            }}>
              登录状态将保持24小时有效
            </div>
          )}
        </Form.Item>
      </Form>
    </div>
  );
};