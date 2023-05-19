/*
 * @Description:登录
 * @Author: yong.li
 * @Date: 2021-12-27 10:25:49
 * @LastEditors: yong.li
 * @LastEditTime: 2022-09-30 13:54:46
 */

import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { observer, inject } from 'mobx-react';
import { useNavigate } from 'react-router-dom';
import api from '@/services/api';
import './common.less';

const Home = (props: any) => {
  const { appStore } = props;

  let navigate = useNavigate();
  // 状态控制
  const [form] = Form.useForm();
  const [fouceType, setFouceType]: any = useState();

  useEffect(() => {
    window.G_OPERATE.setDocumentTitle('登录');
    // 是否记住账号密码
    const isRemember = window.G_LOCALSTORAGE.get('_REMEMBER_LOGIN');
    if (isRemember) {
      const loginInfo = window.G_LOCALSTORAGE.get('_LOGIN_INFO');
      form.setFieldsValue({
        remember: isRemember,
        login: loginInfo?.login,
        password: loginInfo?.password,
      });
    } else {
      form.setFieldsValue({
        remember: isRemember,
      });
    }
  }, [form]);

  // 登录处理
  const handleLogin = async (values: any) => {
    if (values.remember) {
      // 加密缓存登录信息
      window.G_LOCALSTORAGE.set(
        '_LOGIN_INFO',
        {
          login: values.login,
          password: values.password,
        },
        'crypto-hash'
      );
    } else {
      window.G_LOCALSTORAGE.remove('_LOGIN_INFO');
    }

    const { errcode, data }: any = await api.login(values);

    // 登录成功并跳转
    if (errcode === 0) {
      // 加密缓存用户信息
      window.G_LOCALSTORAGE.set('_USER_INFO', data, 'crypto-hash');

      message.success('欢迎回来，登录成功！', 1);

      navigate('/');
    }
  };

  const handleFouce = (type: string) => {
    setFouceType(type);
  };

  // 忘记密码
  const handleForgot = () => {
    navigate('/reset-password');
  };

  // 记住登录变化
  const handleRememberChange = (e: any) => {
    window.G_LOCALSTORAGE.set('_REMEMBER_LOGIN', e.target.checked);
  };

  return (
    <div className="d-login">
      <div className="d-login-container">
        <div className="d-login-left">
          <img
            className="d-login-bg-1"
            src="https://docs.cq-tct.com/funenc/metrics.svg"
            alt=""
          />
          <img
            className="d-login-bg-2"
            src="https://docs.cq-tct.com/funenc/mobile_login.svg"
            alt=""
          />
          <img
            className="d-login-bg-3"
            src="https://docs.cq-tct.com/funenc/two_factor_authentication.svg"
            alt=""
          />
        </div>
        <div className="d-login-right-bg" />
        <div className="d-login-right">
          <div className="d-login-title">欢迎登录</div>
          <div className="d-login-sub-title">{window.G_CONFIG.system.name}</div>
          <div className="d-login-form">
            <Form
              form={form}
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={handleLogin}
            >
              <div
                className="d-login-form-item"
                style={{
                  borderColor: fouceType === 'login' ? '#C4C0D9' : '#F3F3F3',
                }}
              >
                <span>输入账号</span>
                <Form.Item
                  name="login"
                  rules={[
                    { required: true, message: '请输入合法的登录账号！' },
                  ]}
                >
                  <Input
                    allowClear
                    placeholder="请输入登录账号"
                    size="large"
                    onFocus={() => handleFouce('login')}
                  />
                </Form.Item>
              </div>
              <div
                className="d-login-form-item"
                style={{
                  borderColor: fouceType === 'password' ? '#C4C0D9' : '#F3F3F3',
                }}
              >
                <span>输入密码</span>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: '请输入合法的登录密码！' },
                  ]}
                >
                  <Input.Password
                    allowClear
                    placeholder="请输入登录密码"
                    size="large"
                    onFocus={() => handleFouce('password')}
                  />
                </Form.Item>
              </div>

              <Form.Item style={{ marginTop: 15 }}>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox onChange={handleRememberChange}>记住我</Checkbox>
                </Form.Item>

                <a
                  className="login-form-forgot"
                  onClick={handleForgot}
                  href="#!"
                >
                  忘记密码？
                </a>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  size="large"
                  loading={appStore.loading}
                >
                  立即登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default inject('appStore')(observer(Home));
