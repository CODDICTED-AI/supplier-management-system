import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { Layout, Menu, Button, Space } from 'antd';
import { 
  UserOutlined, 
  HomeOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import { SupplierManagement } from './pages/SupplierManagement';
import { OrderManagement } from './pages/OrderManagement';
import { AuthProvider, useAuth } from './hooks/useAuth';
import { WelcomePage } from './components/Auth/WelcomePage';
import 'antd/dist/reset.css';

const { Header, Sider, Content } = Layout;

const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();
  const [collapsed, setCollapsed] = useState(false);

  // 登录成功后自动跳转到订单管理页面
  useEffect(() => {
    if (isAuthenticated && location.pathname === '/') {
      // 确保在登录后跳转到订单管理页面
      console.log('用户已登录，当前在首页，跳转到订单管理');
    }
  }, [isAuthenticated, location.pathname]);

  // 如果未登录，显示欢迎页面
  if (!isAuthenticated) {
    return <WelcomePage />;
  }

  const menuItems = [
    {
      key: '/',
      icon: <HomeOutlined />,
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

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getSelectedKey = () => {
    const path = location.pathname;
    if (path === '/') return '/';
    return path;
  };

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
          
          <Space>
            <Button 
              type="text" 
              icon={<LogoutOutlined />}
              onClick={handleLogout}
              style={{
                color: '#666',
                fontSize: '14px'
              }}
            >
              退出登录
            </Button>
          </Space>
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
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
