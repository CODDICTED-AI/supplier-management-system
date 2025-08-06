import React from 'react';
import { Card, Typography, Space, Divider } from 'antd';
import { SafetyOutlined, BankOutlined } from '@ant-design/icons';
import { LoginForm } from './LoginForm';
import './Auth.css';

const { Title, Text } = Typography;

interface WelcomePageProps {
  onLoginSuccess?: () => void;
}

export const WelcomePage: React.FC<WelcomePageProps> = ({ onLoginSuccess }) => {
  return (
    <div className="welcome-page welcome-background" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
    }}>
      <Card
        className="login-card"
        style={{
          width: '100%',
          maxWidth: '480px',
          borderRadius: '12px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          border: 'none',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
        }}
        bodyStyle={{
          padding: '40px',
          textAlign: 'center',
        }}
      >
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          {/* Logo区域 */}
          <div>
            <div className="logo-container" style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              marginBottom: '24px',
              boxShadow: '0 4px 16px rgba(102, 126, 234, 0.3)',
            }}>
              <BankOutlined style={{ fontSize: '36px', color: 'white' }} />
            </div>
          </div>

          {/* 标题区域 */}
          <div>
            <Title level={2} style={{ 
              margin: 0, 
              color: '#1a1a1a',
              fontSize: '28px',
              fontWeight: 'bold'
            }}>
              欢迎使用农福尚汇供应商管理系统
            </Title>
            <Text style={{ 
              color: '#666', 
              fontSize: '16px',
              marginTop: '8px',
              display: 'block'
            }}>
              专业的供应商关系管理平台
            </Text>
          </div>

          <Divider style={{ margin: '24px 0' }} />

          {/* 安全提示 */}
          <div style={{
            background: '#f8f9fa',
            padding: '16px',
            borderRadius: '8px',
            borderLeft: '4px solid #667eea',
          }}>
            <Space>
              <SafetyOutlined style={{ color: '#667eea', fontSize: '16px' }} />
              <Text style={{ color: '#555', fontSize: '14px' }}>
                为保障系统安全，请输入访问密码
              </Text>
            </Space>
          </div>

          {/* 登录表单 */}
          <LoginForm onLoginSuccess={onLoginSuccess} />

          {/* 底部信息 */}
          <div style={{ marginTop: '24px' }}>
            <Text style={{ 
              color: '#999', 
              fontSize: '12px',
              lineHeight: '1.5'
            }}>
              © 2024 农福尚汇客户管理系统<br />
              专注于农业供应链管理解决方案
            </Text>
          </div>
        </Space>
      </Card>
    </div>
  );
};