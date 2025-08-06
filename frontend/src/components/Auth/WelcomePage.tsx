import React from 'react';
import { Card, Typography } from 'antd';
import { LoginForm } from './LoginForm';

const { Title, Paragraph } = Typography;

export const WelcomePage: React.FC = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        display: 'flex',
        width: '100%',
        maxWidth: '1200px',
        height: '600px',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
        background: '#fff'
      }}>
        {/* 左侧欢迎信息 */}
        <div style={{
          flex: 1,
          background: 'linear-gradient(45deg, #1890ff, #52c41a)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '60px 40px',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat',
            opacity: 0.3
          }} />
          
          <div style={{ position: 'relative', textAlign: 'center' }}>
            <Title level={1} style={{ 
              color: 'white', 
              fontSize: '48px', 
              marginBottom: '24px',
              fontWeight: 'bold',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}>
              欢迎使用
            </Title>
            
            <Title level={2} style={{ 
              color: 'white', 
              fontSize: '32px', 
              marginBottom: '32px',
              fontWeight: 'normal',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}>
              农福尚汇供应商管理系统
            </Title>
            
            <Paragraph style={{ 
              color: 'rgba(255,255,255,0.9)', 
              fontSize: '18px',
              lineHeight: '1.6',
              maxWidth: '400px',
              textShadow: '0 1px 2px rgba(0,0,0,0.2)'
            }}>
              专业的供应商管理解决方案，助力企业数字化转型，提升管理效率
            </Paragraph>
            
            <div style={{
              marginTop: '48px',
              display: 'flex',
              justifyContent: 'center',
              gap: '32px'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  fontSize: '24px', 
                  fontWeight: 'bold',
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                }}>
                  📊
                </div>
                <div style={{ fontSize: '14px', marginTop: '8px' }}>数据管理</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  fontSize: '24px', 
                  fontWeight: 'bold',
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                }}>
                  🚀
                </div>
                <div style={{ fontSize: '14px', marginTop: '8px' }}>高效协作</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  fontSize: '24px', 
                  fontWeight: 'bold',
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                }}>
                  🔒
                </div>
                <div style={{ fontSize: '14px', marginTop: '8px' }}>安全可靠</div>
              </div>
            </div>
          </div>
        </div>

        {/* 右侧登录表单 */}
        <div style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px 40px',
          background: '#fff'
        }}>
          <Card 
            style={{ 
              width: '100%',
              maxWidth: '400px',
              border: 'none',
              boxShadow: 'none'
            }}
            bodyStyle={{ padding: '40px' }}
          >
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <Title level={3} style={{ 
                color: '#333',
                fontSize: '24px',
                marginBottom: '8px'
              }}>
                系统登录
              </Title>
              <Paragraph style={{ 
                color: '#666',
                fontSize: '14px',
                margin: 0
              }}>
                请输入密码以访问管理系统
              </Paragraph>
            </div>
            
            <LoginForm />
          </Card>
        </div>
      </div>
    </div>
  );
};