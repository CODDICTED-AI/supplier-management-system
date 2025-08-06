import React from 'react';
import { Alert, Card } from 'antd';

const TestComponent: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Card title="系统状态测试" style={{ marginBottom: '16px' }}>
        <Alert
          message="前端组件加载成功"
          description="React应用程序正在正常运行"
          type="success"
          showIcon
          style={{ marginBottom: '16px' }}
        />
        <p><strong>API Base URL:</strong> {process.env.REACT_APP_API_URL || 'https://supplier-management-system-3hp8.onrender.com/api'}</p>
        <p><strong>Environment:</strong> {process.env.NODE_ENV}</p>
        <p><strong>React Version:</strong> {React.version}</p>
      </Card>
    </div>
  );
};

export default TestComponent;