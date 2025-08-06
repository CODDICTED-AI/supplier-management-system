import React, { useState } from 'react';
import { Form, Input, Button, Alert, message } from 'antd';
import { LockOutlined, LoginOutlined } from '@ant-design/icons';
import { useAuth } from '../../hooks/useAuth';

export const LoginForm: React.FC = () => {
  const { login, failedAttempts, isLocked, lockTimeRemaining } = useAuth();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const handleSubmit = async (values: { password: string }) => {
    if (isLocked) {
      message.error('账户已被锁定，请稍后再试');
      return;
    }

    setLoading(true);
    
    // 模拟登录延迟
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const success = await login(values.password);
    
    if (success) {
      message.success('登录成功！');
    } else {
      if (isLocked) {
        message.error('密码错误次数过多，账户已被锁定5分钟');
      } else {
        const remainingAttempts = 3 - (failedAttempts + 1);
        message.error(`密码错误，还可尝试${remainingAttempts}次`);
      }
      form.resetFields();
    }
    
    setLoading(false);
  };

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      {isLocked && (
        <Alert
          type="error"
          message="账户已锁定"
          description={`剩余时间：${formatTime(lockTimeRemaining)}`}
          style={{ marginBottom: '24px' }}
          showIcon
        />
      )}

      {failedAttempts > 0 && !isLocked && (
        <Alert
          type="warning"
          message={`密码错误，还可尝试${3 - failedAttempts}次`}
          style={{ marginBottom: '24px' }}
          showIcon
        />
      )}

      <Form
        form={form}
        onFinish={handleSubmit}
        size="large"
        autoComplete="off"
      >
        <Form.Item
          name="password"
          rules={[
            { required: true, message: '请输入密码' },
            { min: 6, message: '密码至少6位字符' }
          ]}
        >
          <Input.Password
            prefix={<LockOutlined style={{ color: '#999' }} />}
            placeholder="请输入系统密码"
            disabled={isLocked}
            onPressEnter={() => form.submit()}
            style={{
              height: '48px',
              fontSize: '16px'
            }}
          />
        </Form.Item>

        <Form.Item style={{ marginBottom: '16px' }}>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            disabled={isLocked}
            icon={<LoginOutlined />}
            style={{
              width: '100%',
              height: '48px',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            {loading ? '登录中...' : '登录'}
          </Button>
        </Form.Item>
      </Form>

      <div style={{ 
        textAlign: 'center', 
        color: '#999', 
        fontSize: '12px',
        marginTop: '24px',
        borderTop: '1px solid #f0f0f0',
        paddingTop: '16px'
      }}>
        <div>系统密码: nongfushanghui2024</div>
        <div style={{ marginTop: '4px' }}>
          连续错误3次将锁定账户5分钟
        </div>
      </div>
    </div>
  );
};