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
    <div className="welcome-page" style={{
      minHeight: '100vh',
      display: 'flex',
      background: '#f0f2f5',
    }}>
      {/* 左侧背景区域 */}
      <div style={{
        flex: 1,
        background: 'linear-gradient(135deg, #1890ff 0%, #722ed1 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '50px',
        color: 'white',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="rgba(255,255,255,0.05)" fill-opacity="0.4"%3E%3Cpath d="M20 20c0 11.046-8.954 20-20 20v-40c11.046 0 20 8.954 20 20z"/%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.1,
        }} />
        
        <div style={{ zIndex: 1, textAlign: 'center' }}>
          <div style={{
            fontSize: '64px',
            marginBottom: '20px',
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '50%',
            width: '120px',
            height: '120px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 30px',
          }}>
            <BankOutlined />
          </div>
          
          <h1 style={{
            fontSize: '32px',
            fontWeight: 'bold',
            marginBottom: '16px',
            color: 'white',
          }}>
            农福尚汇
          </h1>
          
          <h2 style={{
            fontSize: '20px',
            fontWeight: 'normal',
            marginBottom: '40px',
            color: 'rgba(255, 255, 255, 0.85)',
          }}>
            供应商管理系统
          </h2>
          
          <div style={{
            fontSize: '16px',
            lineHeight: '1.6',
            color: 'rgba(255, 255, 255, 0.75)',
            maxWidth: '400px',
          }}>
            <div>• 专业的供应商关系管理</div>
            <div>• 高效的订单跟踪系统</div>
            <div>• 安全可靠的数据保护</div>
          </div>
        </div>
      </div>
      
      {/* 右侧登录区域 */}
      <div style={{
        width: '480px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '50px',
        background: 'white',
      }}>
        <Card
          className="login-card"
          style={{
            width: '100%',
            maxWidth: '380px',
            border: 'none',
            boxShadow: 'none',
          }}
          bodyStyle={{
            padding: '0',
          }}
        >
        <div style={{ width: '100%' }}>
          {/* 登录标题 */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <Title level={2} style={{ 
              margin: 0, 
              color: '#1f1f1f',
              fontSize: '24px',
              fontWeight: '600',
              marginBottom: '8px'
            }}>
              系统登录
            </Title>
            <Text style={{ 
              color: '#8c8c8c', 
              fontSize: '14px'
            }}>
              请输入访问密码进入管理系统
            </Text>
          </div>

          {/* 登录表单 */}
          <LoginForm onLoginSuccess={onLoginSuccess} />

          {/* 底部信息 */}
          <div style={{ 
            textAlign: 'center', 
            marginTop: '40px',
            paddingTop: '24px',
            borderTop: '1px solid #f0f0f0'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px'
            }}>
              <SafetyOutlined style={{ color: '#1890ff', fontSize: '16px', marginRight: '8px' }} />
              <Text style={{ color: '#595959', fontSize: '13px' }}>
                安全登录保护，5次错误将锁定账户
              </Text>
            </div>
            <Text style={{ 
              color: '#bfbfbf', 
              fontSize: '12px'
            }}>
              © 2024 农福尚汇 · 版权所有
            </Text>
          </div>
        </div>
        </Card>
      </div>
    </div>
  );
};