import React, { useState, useEffect, useCallback } from 'react';
import { 
  Table, 
  Button, 
  Input, 
  Select, 
  Modal, 
  Form, 
  message, 
  Space,
  Tag,
  DatePicker,
  InputNumber
} from 'antd';
import { 
  PlusOutlined, 
  SearchOutlined, 
  EyeOutlined,
  CheckCircleOutlined
} from '@ant-design/icons';
import { orderApi, supplierApi } from '../../services/api';
import { OrderWithSupplier, Supplier } from '../../types';
import dayjs from 'dayjs';

const { Search } = Input;
const { Option } = Select;

export const OrderList: React.FC = () => {
  const [orders, setOrders] = useState<OrderWithSupplier[]>([]);
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [total, setTotal] = useState(0);
  // const [totalPages, setTotalPages] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [detailModalVisible, setDetailModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<OrderWithSupplier | null>(null);
  const [form] = Form.useForm();

  // 获取订单列表
  const fetchOrders = useCallback(async () => {
    setLoading(true);
    try {
      const response = await orderApi.getAll(currentPage, statusFilter, searchKeyword);
      if (response.data.success) {
        const responseData = response.data.data;
        // 确保数据结构正确
        if (responseData && typeof responseData === 'object') {
          const { data, total } = responseData;
          if (Array.isArray(data)) {
            setOrders(data);
            setTotal(total || 0);
          } else {
            console.error('订单数据格式错误:', responseData);
            message.error('订单数据格式错误');
          }
        } else {
          console.error('响应数据格式错误:', responseData);
          message.error('响应数据格式错误');
        }
      } else {
        message.error(response.data.error || '获取订单列表失败');
      }
    } catch (error: any) {
      console.error('获取订单列表错误:', error);
      message.error(error.response?.data?.error || '获取订单列表失败');
    } finally {
      setLoading(false);
    }
  }, [currentPage, statusFilter, searchKeyword]);

  // 获取供应商列表
  const fetchSuppliers = useCallback(async () => {
    try {
      const response = await supplierApi.getAll();
      if (response.data.success) {
        const suppliersData = response.data.data;
        if (Array.isArray(suppliersData)) {
          setSuppliers(suppliersData);
        } else {
          console.error('供应商数据格式错误:', suppliersData);
          message.error('供应商数据格式错误');
        }
      } else {
        message.error(response.data.error || '获取供应商列表失败');
      }
    } catch (error: any) {
      console.error('获取供应商列表错误:', error);
      message.error(error.response?.data?.error || '获取供应商列表失败');
    }
  }, []);

  // 搜索订单
  const handleSearch = useCallback((value: string) => {
    setSearchKeyword(value);
    setCurrentPage(1);
  }, []);

  // 状态筛选
  const handleStatusChange = useCallback((value: string) => {
    setStatusFilter(value);
    setCurrentPage(1);
  }, []);

  // 分页变化
  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  // 添加订单
  const handleAdd = useCallback(() => {
    form.resetFields();
    setModalVisible(true);
  }, [form]);

  // 查看订单详情
  const handleViewDetail = useCallback(async (id: number) => {
    try {
      const response = await orderApi.getDetail(id);
      if (response.data.success) {
        setSelectedOrder(response.data.data);
        setDetailModalVisible(true);
      } else {
        message.error(response.data.error || '获取订单详情失败');
      }
    } catch (error: any) {
      console.error('获取订单详情错误:', error);
      message.error(error.response?.data?.error || '获取订单详情失败');
    }
  }, []);

  // 完成订单
  const handleComplete = useCallback(async (id: number) => {
    try {
      const response = await orderApi.updateStatus(id, '已完成');
      if (response.data.success) {
        message.success('订单已完成');
        await fetchOrders();
      } else {
        message.error(response.data.error || '操作失败');
      }
    } catch (error: any) {
      console.error('完成订单错误:', error);
      message.error(error.response?.data?.error || '操作失败');
    }
  }, [fetchOrders]);

  // 提交表单
  const handleSubmit = useCallback(async (values: any) => {
    try {
      const orderData = {
        ...values,
        order_date: values.order_date.format('YYYY-MM-DD'),
        expected_delivery_date: values.expected_delivery_date?.format('YYYY-MM-DD'),
      };

      const response = await orderApi.create(orderData);
      if (response.data.success) {
        message.success('订单创建成功');
        setModalVisible(false);
        form.resetFields();
        // 重新获取订单列表
        await fetchOrders();
      } else {
        message.error(response.data.error || '创建失败');
      }
    } catch (error: any) {
      console.error('创建订单错误:', error);
      message.error(error.response?.data?.error || '创建失败');
    }
  }, [fetchOrders, form]);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  useEffect(() => {
    fetchSuppliers();
  }, [fetchSuppliers]);

  const columns = [
    {
      title: '公司名称',
      dataIndex: 'company_name',
      key: 'company_name',
    },
    {
      title: '订货联系人',
      dataIndex: 'order_contact',
      key: 'order_contact',
    },
    {
      title: '供应产品',
      dataIndex: 'product_name',
      key: 'product_name',
    },
    {
      title: '订货时间',
      dataIndex: 'order_date',
      key: 'order_date',
      render: (date: string) => {
        try {
          return date ? dayjs(date).format('YYYY-MM-DD') : '-';
        } catch (error) {
          console.error('日期格式化错误:', error);
          return date || '-';
        }
      },
    },
    {
      title: '订货单价',
      dataIndex: 'unit_price',
      key: 'unit_price',
      render: (price: number) => {
        try {
          const numPrice = Number(price);
          return `¥${!isNaN(numPrice) ? numPrice.toFixed(2) : '0.00'}`;
        } catch (error) {
          console.error('价格格式化错误:', error);
          return '¥0.00';
        }
      },
    },
    {
      title: '订货数量',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: '总金额',
      dataIndex: 'total_amount',
      key: 'total_amount',
      render: (amount: number) => {
        try {
          const numAmount = Number(amount);
          return `¥${!isNaN(numAmount) ? numAmount.toFixed(2) : '0.00'}`;
        } catch (error) {
          console.error('总金额格式化错误:', error);
          return '¥0.00';
        }
      },
    },
    {
      title: '预计到货时间',
      dataIndex: 'expected_delivery_date',
      key: 'expected_delivery_date',
      render: (date: string) => {
        try {
          return date ? dayjs(date).format('YYYY-MM-DD') : '-';
        } catch (error) {
          console.error('日期格式化错误:', error);
          return date || '-';
        }
      },
    },
    {
      title: '订单状态',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={status === '已完成' ? 'green' : 'orange'}>
          {status}
        </Tag>
      ),
    },
    {
      title: '操作',
      key: 'action',
      render: (_: any, record: OrderWithSupplier) => (
        <Space>
          <Button 
            type="link" 
            icon={<EyeOutlined />}
            onClick={() => handleViewDetail(record.id!)}
          >
            查看详情
          </Button>
          {record.status === '未完成' && (
            <Button 
              type="link" 
              icon={<CheckCircleOutlined />}
              onClick={() => handleComplete(record.id!)}
            >
              完成订单
            </Button>
          )}
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: '24px' }}>
      <div style={{ marginBottom: 16, display: 'flex', gap: 16, alignItems: 'center' }}>
        <Select
          value={statusFilter}
          onChange={handleStatusChange}
          style={{ width: 150 }}
        >
          <Option value="all">历史所有订单</Option>
          <Option value="未完成">未完成订单</Option>
          <Option value="已完成">已完成订单</Option>
        </Select>
        
        <Search
          placeholder="输入公司名称或产品名称搜索"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          onSearch={handleSearch}
          style={{ width: 300 }}
          enterButton={<SearchOutlined />}
        />
        
        <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
          添加订单
        </Button>
      </div>
      
      <Table
        dataSource={orders}
        loading={loading}
        columns={columns}
        rowKey="id"
        pagination={{
          current: currentPage,
          pageSize: 10,
          total: total,
          onChange: handlePageChange,
          showSizeChanger: false,
          showQuickJumper: true,
          showTotal: (total, range) => 
            `第 ${range[0]}-${range[1]} 条，共 ${total} 条记录`,
        }}
      />
      
      {/* 添加订单模态框 */}
      <Modal
        title="添加订单"
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
        width={600}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
        >
          <Form.Item
            name="supplier_id"
            label="供应商"
            rules={[{ required: true, message: '请选择供应商' }]}
          >
            <Select placeholder="请选择供应商">
              {suppliers.map(supplier => (
                <Option key={supplier.id} value={supplier.id}>
                  {supplier.company_name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          
          <Form.Item
            name="order_contact"
            label="订货联系人"
            rules={[{ required: true, message: '请输入订货联系人' }]}
          >
            <Input placeholder="请输入订货联系人" />
          </Form.Item>
          
          <Form.Item
            name="product_name"
            label="供应产品"
            rules={[{ required: true, message: '请输入供应产品' }]}
          >
            <Input placeholder="请输入供应产品" />
          </Form.Item>
          
          <Form.Item
            name="order_date"
            label="订货时间"
            rules={[
              { required: true, message: '请选择订货时间' },
              {
                validator: (_, value) => {
                  if (value && value.isAfter(dayjs(), 'day')) {
                    return Promise.reject(new Error('订货时间不能晚于今天'));
                  }
                  return Promise.resolve();
                }
              }
            ]}
          >
            <DatePicker style={{ width: '100%' }} placeholder="选择订货时间" />
          </Form.Item>
          
          <Form.Item
            name="unit_price"
            label="订货单价"
            rules={[
              { required: true, message: '请输入订货单价' },
              { type: 'number', min: 0.01, message: '单价必须大于0' }
            ]}
          >
            <InputNumber 
              style={{ width: '100%' }} 
              placeholder="请输入订货单价"
              min={0.01}
              precision={2}
              addonAfter="¥"
            />
          </Form.Item>
          
          <Form.Item
            name="quantity"
            label="订货数量"
            rules={[
              { required: true, message: '请输入订货数量' },
              { type: 'number', min: 1, message: '数量必须大于0' }
            ]}
          >
            <InputNumber 
              style={{ width: '100%' }} 
              placeholder="请输入订货数量"
              min={1}
            />
          </Form.Item>
          
          <Form.Item name="expected_delivery_date" label="预计到货时间">
            <DatePicker style={{ width: '100%' }} placeholder="选择预计到货时间" />
          </Form.Item>
          
          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                创建
              </Button>
              <Button onClick={() => setModalVisible(false)}>
                取消
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>

      {/* 订单详情模态框 */}
      <Modal
        title="订单详情"
        open={detailModalVisible}
        onCancel={() => setDetailModalVisible(false)}
        footer={[
          <Button key="close" onClick={() => setDetailModalVisible(false)}>
            关闭
          </Button>,
          selectedOrder?.status === '未完成' && (
            <Button 
              key="complete" 
              type="primary" 
              icon={<CheckCircleOutlined />}
              onClick={() => {
                handleComplete(selectedOrder!.id!);
                setDetailModalVisible(false);
              }}
            >
              订单完成
            </Button>
          ),
        ]}
        width={600}
      >
        {selectedOrder && (
          <div>
            <p><strong>公司名称：</strong>{selectedOrder.company_name}</p>
            <p><strong>订货联系人：</strong>{selectedOrder.order_contact}</p>
            <p><strong>供应产品：</strong>{selectedOrder.product_name}</p>
            <p><strong>订货时间：</strong>
              {(() => {
                try {
                  return dayjs(selectedOrder.order_date).format('YYYY-MM-DD');
                } catch (error) {
                  console.error('订货时间格式化错误:', error);
                  return selectedOrder.order_date || '-';
                }
              })()}
            </p>
            <p><strong>订货单价：</strong>
              {(() => {
                try {
                  const price = Number(selectedOrder.unit_price);
                  return `¥${!isNaN(price) ? price.toFixed(2) : '0.00'}`;
                } catch (error) {
                  console.error('单价格式化错误:', error);
                  return '¥0.00';
                }
              })()}
            </p>
            <p><strong>订货数量：</strong>{selectedOrder.quantity || 0}</p>
            <p><strong>总金额：</strong>
              {(() => {
                try {
                  const amount = Number(selectedOrder.total_amount);
                  return `¥${!isNaN(amount) ? amount.toFixed(2) : '0.00'}`;
                } catch (error) {
                  console.error('总金额格式化错误:', error);
                  return '¥0.00';
                }
              })()}
            </p>
            <p><strong>预计到货时间：</strong>
              {selectedOrder.expected_delivery_date 
                ? dayjs(selectedOrder.expected_delivery_date).format('YYYY-MM-DD')
                : '-'
              }
            </p>
            <p><strong>订单状态：</strong>
              <Tag color={selectedOrder.status === '已完成' ? 'green' : 'orange'}>
                {selectedOrder.status}
              </Tag>
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
}; 