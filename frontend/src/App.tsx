import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { Layout, Menu, Button, Tooltip, Spin } from 'antd';
import { 
  UserOutlined, 
  ShoppingCartOutlined,
  HomeOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import { SupplierManagement } from './pages/SupplierManagement';
import { OrderManagement } from './pages/OrderManagement';
import ErrorBoundary from './components/ErrorBoundary';
import TestComponent from './components/TestComponent';
import { WelcomePage } from './components/Auth/WelcomePage';
import { useAuth } from './hooks/useAuth';
import { warmupApi } from './services/api';
import 'antd/dist/reset.css';

const { Header, Sider, Content } = Layout;

const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const { isAuthenticated, isLoading, logout } = useAuth();

  const menuItems = [
    {
      key: '/',
      icon: <ShoppingCartOutlined />,
      label: '订单管理',
    },
    {
      key: '/suppliers',
      icon: <UserOutlined />,
      label: '供应商管理',
    },
  ];

  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key);
  };

  const getSelectedKey = () => {
    const path = location.pathname;
    if (path === '/') return '/';
    return path;
  };

  const handleLogout = () => {
    logout();
  };

  const handleLoginSuccess = async () => {
    // 登录成功后的处理，useAuth已经更新了状态
    console.log('登录成功');
    
    // 确保跳转到订单管理页面
    navigate('/');
    
    // 预热API服务器
    try {
      await warmupApi();
    } catch (error) {
      console.warn('API预热失败，但不影响使用:', error);
    }
  };

  // 加载状态
  if (isLoading) {
    return (
      <div className="loading-container" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
      }}>
        <Spin size="large" tip="系统初始化中..." />
      </div>
    );
  }

  // 未认证状态显示欢迎页面
  if (!isAuthenticated) {
    return <WelcomePage onLoginSuccess={handleLoginSuccess} />;
  }

  // 已认证状态显示主系统
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider 
        collapsible 
        collapsed={collapsed} 
        onCollapse={setCollapsed}
        theme="dark"
      >
        <div style={{ 
          height: 32, 
          margin: 16, 
          background: 'rgba(255, 255, 255, 0.2)',
          borderRadius: 6,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: collapsed ? 12 : 16,
          fontWeight: 'bold'
        }}>
          {collapsed ? '农福' : '农福尚汇'}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[getSelectedKey()]}
          items={menuItems}
          onClick={handleMenuClick}
        />
      </Sider>
      <Layout>
        <Header style={{ 
          background: '#fff', 
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <h1 style={{ 
            margin: 0, 
            color: '#1890ff',
            fontSize: 20,
            fontWeight: 'bold'
          }}>
            农福尚汇客户管理系统
          </h1>
          
          <Tooltip title="退出登录">
            <Button
              type="text"
              icon={<LogoutOutlined />}
              onClick={handleLogout}
              style={{
                display: 'flex',
                alignItems: 'center',
                height: '40px',
                color: '#666'
              }}
            >
              退出
            </Button>
          </Tooltip>
        </Header>
        <Content style={{ 
          margin: '24px 16px',
          padding: 24,
          background: '#fff',
          borderRadius: 8,
          minHeight: 280
        }}>
          <Routes>
            <Route path="/" element={<OrderManagement />} />
            <Route path="/suppliers" element={<SupplierManagement />} />
            <Route path="/test" element={<TestComponent />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <AppContent />
      </Router>
    </ErrorBoundary>
  );
}

export default App;
