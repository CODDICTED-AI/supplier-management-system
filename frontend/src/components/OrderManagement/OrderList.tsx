import React, { useState, useEffect } from 'react';
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
  const fetchOrders = async () => {
    setLoading(true);
    try {
      const response = await orderApi.getAll(currentPage, statusFilter, searchKeyword);
      if (response.data.success) {
        const { data, total } = response.data.data;
        setOrders(data);
        setTotal(total);
      }
    } catch (error) {
      message.error('获取订单列表失败');
    } finally {
      setLoading(false);
    }
  };

  // 获取供应商列表
  const fetchSuppliers = async () => {
    try {
      const response = await supplierApi.getAll();
      if (response.data.success) {
        setSuppliers(response.data.data);
      }
    } catch (error) {
      message.error('获取供应商列表失败');
    }
  };

  // 搜索订单
  const handleSearch = (value: string) => {
    setSearchKeyword(value);
    setCurrentPage(1);
  };

  // 状态筛选
  const handleStatusChange = (value: string) => {
    setStatusFilter(value);
    setCurrentPage(1);
  };

  // 分页变化
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // 添加订单
  const handleAdd = () => {
    form.resetFields();
    setModalVisible(true);
  };

  // 查看订单详情
  const handleViewDetail = async (id: number) => {
    try {
      const response = await orderApi.getDetail(id);
      if (response.data.success) {
        setSelectedOrder(response.data.data);
        setDetailModalVisible(true);
      }
    } catch (error) {
      message.error('获取订单详情失败');
    }
  };

  // 完成订单
  const handleComplete = async (id: number) => {
    try {
      const response = await orderApi.updateStatus(id, '已完成');
      if (response.data.success) {
        message.success('订单已完成');
        fetchOrders();
      }
    } catch (error) {
      message.error('操作失败');
    }
  };

  // 提交表单
  const handleSubmit = async (values: any) => {
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
        fetchOrders();
      }
    } catch (error: any) {
      message.error(error.response?.data?.error || '创建失败');
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [currentPage, statusFilter, searchKeyword]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    fetchSuppliers();
  }, []);

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
      render: (date: string) => dayjs(date).format('YYYY-MM-DD'),
    },
    {
      title: '订货单价',
      dataIndex: 'unit_price',
      key: 'unit_price',
      render: (price: number) => `¥${price.toFixed(2)}`,
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
      render: (amount: number) => `¥${amount.toFixed(2)}`,
    },
    {
      title: '预计到货时间',
      dataIndex: 'expected_delivery_date',
      key: 'expected_delivery_date',
      render: (date: string) => date ? dayjs(date).format('YYYY-MM-DD') : '-',
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
            rules={[{ required: true, message: '请选择订货时间' }]}
          >
            <DatePicker style={{ width: '100%' }} placeholder="选择订货时间" />
          </Form.Item>
          
          <Form.Item
            name="unit_price"
            label="订货单价"
            rules={[{ required: true, message: '请输入订货单价' }]}
          >
            <InputNumber 
              style={{ width: '100%' }} 
              placeholder="请输入订货单价"
              min={0}
              precision={2}
              addonAfter="¥"
            />
          </Form.Item>
          
          <Form.Item
            name="quantity"
            label="订货数量"
            rules={[{ required: true, message: '请输入订货数量' }]}
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
            <p><strong>订货时间：</strong>{dayjs(selectedOrder.order_date).format('YYYY-MM-DD')}</p>
            <p><strong>订货单价：</strong>¥{selectedOrder.unit_price.toFixed(2)}</p>
            <p><strong>订货数量：</strong>{selectedOrder.quantity}</p>
            <p><strong>总金额：</strong>¥{selectedOrder.total_amount?.toFixed(2)}</p>
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