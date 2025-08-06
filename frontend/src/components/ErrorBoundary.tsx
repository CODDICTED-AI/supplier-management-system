import React from 'react';
import { Alert, Button } from 'antd';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('应用错误:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: '50px', 
          textAlign: 'center',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Alert
            message="应用出现错误"
            description={`页面加载失败，请刷新页面重试。错误信息：${this.state.error?.message || '未知错误'}`}
            type="error"
            showIcon
            style={{ maxWidth: '600px', marginBottom: '20px' }}
          />
          <Button 
            type="primary"
            onClick={() => window.location.reload()}
            size="large"
          >
            刷新页面
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;