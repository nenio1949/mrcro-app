import React, { useState } from 'react';
import { Spin, Form, Input, Button, message } from 'antd';
import { observer, inject } from 'mobx-react';
import api from '@/services/api';
import LayoutHOC from '@/components/layouts';

const formItemLayout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 10,
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    span: 24,
  },
};

const Home = (props: any) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  window.G_OPERATE.setDocumentTitle('修改密码');

  // 处理
  const handleSubmit = async (values: any) => {
    const { oldPassword, newPassword, newPasswordConfirm } = values;

    if (newPassword !== newPasswordConfirm) {
      return message.error('确认密码两次输入不一致', 1);
    }

    const datas = {
      oldPassword,
      newPassword,
    };

    setLoading(true);
    const res: any = await api.changePassword(datas);
    setLoading(false);

    if (res.errcode === 0) {
      message.success('密码修改成功！', 1);

      props.history.push('/');
    } else {
      setLoading(false);
    }
  };

  return (
    <div
      style={{ width: '100%', textAlign: 'center', padding: '6% 15px 0 15px' }}
    >
      <h1>修改密码</h1>
      <Spin spinning={loading}>
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={handleSubmit}
          scrollToFirstError
        >
          <Form.Item
            name="oldPassword"
            label="旧密码"
            hasFeedback
            rules={[{ required: true, message: '请输入旧密码！' }]}
          >
            <Input placeholder="请输入旧密码" />
          </Form.Item>

          <Form.Item
            name="newPassword"
            label="新密码"
            hasFeedback
            rules={[{ required: true, message: '请输入新密码！' }]}
          >
            <Input placeholder="请输入新密码" />
          </Form.Item>

          <Form.Item
            name="newPasswordConfirm"
            label="新密码确认"
            hasFeedback
            dependencies={['newPassword']}
            rules={[
              { required: true, message: '请输入新密码！' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('newPassword') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('两次输入的密码不一致!'));
                },
              }),
            ]}
          >
            <Input placeholder="请输入新密码确认" />
          </Form.Item>

          <Form.Item {...tailFormItemLayout} style={{ textAlign: 'center' }}>
            <Button type="primary" htmlType="submit">
              立即提交
            </Button>
          </Form.Item>
        </Form>
      </Spin>
    </div>
  );
};

export default inject('appStore')(observer(LayoutHOC(Home)));
