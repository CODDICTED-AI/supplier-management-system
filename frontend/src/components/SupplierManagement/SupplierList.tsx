import React, { useState, useEffect, useCallback } from 'react';
import { 
  Table, 
  Button, 
  Input, 
  Modal, 
  Form, 
  Select, 
  Upload, 
  message, 
  Popconfirm,
  Space,
  Tag,
  DatePicker
} from 'antd';
import { 
  PlusOutlined, 
  SearchOutlined, 
  EditOutlined, 
  DeleteOutlined,
  UploadOutlined,
  EyeOutlined,
  DownloadOutlined,
  FileTextOutlined
} from '@ant-design/icons';
import { supplierApi } from '../../services/api';
import { Supplier } from '../../types';
import dayjs from 'dayjs';

const { Search } = Input;
const { Option } = Select;

export const SupplierList: React.FC = () => {
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [editingSupplier, setEditingSupplier] = useState<Supplier | null>(null);
  const [form] = Form.useForm();

  // 获取供应商列表
  const fetchSuppliers = useCallback(async () => {
    setLoading(true);
    try {
      const response = await supplierApi.getAll();
      if (response.data.success) {
        setSuppliers(response.data.data);
      }
    } catch (error) {
      message.error('获取供应商列表失败');
    } finally {
      setLoading(false);
    }
  }, []);

  // 搜索供应商
  const handleSearch = useCallback(async (value: string) => {
    if (!value.trim()) {
      fetchSuppliers();
      return;
    }
    
    setLoading(true);
    try {
      const response = await supplierApi.search(value);
      if (response.data.success) {
        setSuppliers(response.data.data);
      }
    } catch (error) {
      message.error('搜索失败');
    } finally {
      setLoading(false);
    }
  }, [fetchSuppliers]);

  // 添加供应商
  const handleAdd = useCallback(() => {
    setEditingSupplier(null);
    form.resetFields();
    setModalVisible(true);
  }, [form]);

  // 编辑供应商
  const handleEdit = useCallback((record: Supplier) => {
    setEditingSupplier(record);
    form.setFieldsValue({
      ...record,
      contract_start_date: record.contract_start_date ? dayjs(record.contract_start_date) : undefined,
      contract_end_date: record.contract_end_date ? dayjs(record.contract_end_date) : undefined,
    });
    setModalVisible(true);
  }, [form]);

  // 删除供应商
  const handleDelete = useCallback(async (id: number) => {
    try {
      const response = await supplierApi.delete(id);
      if (response.data.success) {
        message.success('删除成功');
        fetchSuppliers();
      }
    } catch (error: any) {
      message.error(error.response?.data?.error || '删除失败');
    }
  }, [fetchSuppliers]);

  // 提交表单
  const handleSubmit = useCallback(async (values: any) => {
    try {
      const formData = new FormData();
      
      // 处理日期字段
      if (values.contract_start_date) {
        formData.append('contract_start_date', values.contract_start_date.format('YYYY-MM-DD'));
      }
      if (values.contract_end_date) {
        formData.append('contract_end_date', values.contract_end_date.format('YYYY-MM-DD'));
      }
      
      // 处理其他字段
      formData.append('company_name', values.company_name);
      formData.append('contact_person', values.contact_person);
      if (values.contact_phone) {
        formData.append('contact_phone', values.contact_phone);
      }
      formData.append('logistics_type', values.logistics_type);
      
      // 处理文件上传
      if (values.contract_file && values.contract_file[0]) {
        formData.append('contract_file', values.contract_file[0].originFileObj);
      }

      if (editingSupplier) {
        // 更新
        const response = await supplierApi.update(editingSupplier.id!, formData);
        if (response.data.success) {
          message.success('更新成功');
          setModalVisible(false);
          fetchSuppliers();
        }
      } else {
        // 创建
        const response = await supplierApi.create(formData);
        if (response.data.success) {
          message.success('创建成功');
          setModalVisible(false);
          fetchSuppliers();
        }
      }
    } catch (error: any) {
      message.error(error.response?.data?.error || '操作失败');
    }
  }, [editingSupplier, fetchSuppliers]);

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
      title: '联系人',
      dataIndex: 'contact_person',
      key: 'contact_person',
    },
    {
      title: '联系电话',
      dataIndex: 'contact_phone',
      key: 'contact_phone',
      render: (phone: string) => phone || '-',
    },
    {
      title: '合同开始日期',
      dataIndex: 'contract_start_date',
      key: 'contract_start_date',
      render: (date: string) => date ? dayjs(date).format('YYYY-MM-DD') : '-',
    },
    {
      title: '合同结束日期',
      dataIndex: 'contract_end_date',
      key: 'contract_end_date',
      render: (date: string) => date ? dayjs(date).format('YYYY-MM-DD') : '-',
    },
    {
      title: '物流类型',
      dataIndex: 'logistics_type',
      key: 'logistics_type',
      render: (type: string) => (
        <Tag color={type === '随货' ? 'blue' : 'green'}>{type}</Tag>
      ),
    },
    {
      title: '合同文件',
      dataIndex: 'contract_file_path',
      key: 'contract_file_path',
      render: (path: string, record: Supplier) => {
        if (!path) return '-';
        
        const filename = path.split('/').pop();
        const downloadUrl = `${process.env.REACT_APP_API_URL || '/api'}/files/download/${filename}`;
        const viewUrl = `${process.env.REACT_APP_API_URL || '/api'}/${path}`;
        
        return (
          <Space direction="vertical" size="small">
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <FileTextOutlined style={{ color: '#1890ff' }} />
              <span style={{ fontSize: '12px', color: '#666' }}>
                {record.contract_file_original_name || filename}
              </span>
            </div>
            <Space size="small">
              <Button 
                type="link" 
                size="small" 
                icon={<EyeOutlined />}
                onClick={() => window.open(viewUrl, '_blank')}
              >
                查看
              </Button>
              <Button 
                type="link" 
                size="small" 
                icon={<DownloadOutlined />}
                onClick={() => window.open(downloadUrl, '_blank')}
              >
                下载
              </Button>
            </Space>
            {record.contract_file_size && (
              <span style={{ fontSize: '11px', color: '#999' }}>
                大小: {(record.contract_file_size / 1024).toFixed(1)} KB
              </span>
            )}
          </Space>
        );
      },
    },
    {
      title: '操作',
      key: 'action',
      render: (_: any, record: Supplier) => (
        <Space>
          <Button 
            type="link" 
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          >
            编辑
          </Button>
          <Popconfirm
            title="确定要删除这个供应商吗？"
            onConfirm={() => handleDelete(record.id!)}
            okText="确定"
            cancelText="取消"
          >
            <Button type="link" danger icon={<DeleteOutlined />}>
              删除
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: '24px' }}>
      <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'space-between' }}>
        <Search
          placeholder="输入公司名称或联系人搜索"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          onSearch={handleSearch}
          style={{ width: 300 }}
          enterButton={<SearchOutlined />}
        />
        <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
          添加供应商
        </Button>
      </div>
      
      <Table
        dataSource={suppliers}
        loading={loading}
        columns={columns}
        rowKey="id"
        pagination={{
          showSizeChanger: true,
          showQuickJumper: true,
          showTotal: (total) => `共 ${total} 条记录`,
        }}
      />
      
      <Modal
        title={editingSupplier ? '编辑供应商' : '添加供应商'}
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
        width={600}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={{
            logistics_type: '随货',
          }}
        >
          <Form.Item
            name="company_name"
            label="公司名称"
            rules={[{ required: true, message: '请输入公司名称' }]}
          >
            <Input placeholder="请输入公司名称" />
          </Form.Item>
          
          <Form.Item
            name="contact_person"
            label="联系人"
            rules={[{ required: true, message: '请输入联系人' }]}
          >
            <Input placeholder="请输入联系人" />
          </Form.Item>
          
          <Form.Item
            name="contact_phone"
            label="联系电话"
            rules={[
              { pattern: /^[1][3-9][0-9]{9}$|^0\d{2,3}-?\d{7,8}$|^400-?\d{3}-?\d{4}$/, message: '请输入正确的电话号码格式' }
            ]}
          >
            <Input placeholder="请输入联系电话（可选）" />
          </Form.Item>
          
          <Form.Item name="contract_start_date" label="合同开始日期">
            <DatePicker style={{ width: '100%' }} placeholder="选择开始日期" />
          </Form.Item>
          
          <Form.Item name="contract_end_date" label="合同结束日期">
            <DatePicker style={{ width: '100%' }} placeholder="选择结束日期" />
          </Form.Item>
          
          <Form.Item
            name="logistics_type"
            label="物流类型"
            rules={[{ required: true, message: '请选择物流类型' }]}
          >
            <Select placeholder="请选择物流类型">
              <Option value="随货">随货</Option>
              <Option value="独立">独立</Option>
            </Select>
          </Form.Item>
          
          <Form.Item name="contract_file" label="合同文件">
            <Upload
              beforeUpload={() => false}
              accept=".pdf"
              maxCount={1}
              showUploadList={{
                showPreviewIcon: false,
                showDownloadIcon: false,
                showRemoveIcon: true,
              }}
            >
              <Button icon={<UploadOutlined />}>选择PDF文件（最大5MB）</Button>
            </Upload>
            {editingSupplier?.contract_file_original_name && (
              <div style={{ marginTop: 8, fontSize: '12px', color: '#666' }}>
                <FileTextOutlined style={{ marginRight: 4 }} />
                当前文件: {editingSupplier.contract_file_original_name}
                {editingSupplier.contract_file_size && (
                  <span> ({(editingSupplier.contract_file_size / 1024).toFixed(1)} KB)</span>
                )}
              </div>
            )}
          </Form.Item>
          
          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                {editingSupplier ? '更新' : '创建'}
              </Button>
              <Button onClick={() => setModalVisible(false)}>
                取消
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}; 