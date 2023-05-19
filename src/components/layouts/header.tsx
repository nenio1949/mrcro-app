import React, { Component } from 'react';
import { Avatar, Dropdown, Button, Modal, Tooltip, Menu, message } from 'antd';
import {
  ExclamationCircleOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import api from '@/services/api';
import menuItems from '@/config/menu';
import { withRouter, RoutedProps } from '../withRouter';
import microApp from '@micro-zoe/micro-app';
import avatarImg from '@/assets/img/avatar.gif';

export interface IState {
  isVisibleModal?: boolean;
  projects: Array<any>;
  selectedProject: any;
  projectHashs?: any;
  appLoading?: boolean;
}

class Home extends Component<RoutedProps, IState> {
  constructor(props: any) {
    super(props);

    window.G_PROPS = { ...props };

    this.state = {
      isVisibleModal: false,
      appLoading: false,
      projects: [], // 所有项目
      projectHashs: {}, // 所有项目
      selectedProject: [], // 已选择的项目
    };
  }

  componentDidMount() {
    microApp.removeDataListener('vite-react-app', this.viteDataListener);
    microApp.removeDataListener('webpack-react-app', this.webpackDataListener);
    microApp.addDataListener('vite-react-app', this.viteDataListener);
    microApp.addDataListener('webpack-react-app', this.webpackDataListener);
  }

  viteDataListener = (data: any) => {
    message.info(data.data);
  };

  webpackDataListener = (data: any) => {
    message.info(data.data);
  };

  // 获取当前人员权限
  handleUserAuths = async (projectId: number) => {
    const { errcode, data }: any = await api.getUserAuthorities({
      project_id: projectId,
    });

    if (errcode === 0) {
      window.G_LOCALSTORAGE.set('_USER_AUTHCODE', data, 'crypto-hash');
    }
  };

  // 跳转登录页
  handleJumpToLogin = () => {
    Modal.confirm({
      title: '确定要退出本次登录吗？',
      icon: <ExclamationCircleOutlined />,
      content: '退出后需要重新登录',
      okText: '确认',
      cancelText: '取消',
      onOk: async () => {
        window.G_LOCALSTORAGE.clear();
        this.props.navigate('/login');
      },
    });
  };

  // 跳转指定页
  handleJumpToPage = (page: string) => {
    this.props.navigate(page);
  };

  // 模态框
  handleIsVisibleModal = () => {
    const { isVisibleModal } = this.state;

    this.setState({ isVisibleModal: !isVisibleModal });
  };

  /** 切换微应用 */
  handleSwitchMicroApp = async (appName: string) => {
    const { navigate } = this.props;
    navigate(`${appName}`);
    await this.props.appStore.handleAppLoading();
  };

  /** 向子应用发送数据 */
  handleSendDataToMicroApp = (microAppName: string, data: any) => {
    microApp.setData(microAppName, data);
  };

  render() {
    const userInfo: any = window.G_LOCALSTORAGE.get('_USER_INFO') || {};
    const { name: userName, avatar: userAvatar } = userInfo;

    const userInfoDOMs = (
      <div className="d-header-panel">
        {userAvatar ? (
          <Avatar
            size={64}
            src={userAvatar}
            style={{
              color: '#f56a00',
              backgroundColor: '#fde3cf',
              marginBottom: 10,
            }}
          />
        ) : (
          <Avatar
            size={64}
            style={{
              color: '#f56a00',
              backgroundColor: '#fde3cf',
              marginBottom: 10,
            }}
            src={avatarImg}
          />
        )}
        <ul>
          {userInfo && Object.keys(userInfo).length > 0 && (
            <>
              <li>
                <strong>{userName}</strong>
              </li>
              <li>
                <Button
                  onClick={() => this.handleJumpToPage('/change-password')}
                  type="text"
                  block
                >
                  修改密码
                </Button>
              </li>
              <li>
                <Button
                  type="primary"
                  style={{ marginRight: 16 }}
                  onClick={() =>
                    this.handleSendDataToMicroApp('webpack-react-app', {
                      data: '来自主应用的数据',
                    })
                  }
                >
                  向webpack发送数据
                </Button>
                <Button
                  type="primary"
                  onClick={() =>
                    this.handleSendDataToMicroApp('vite-react-app', {
                      data: '来自主应用的数据',
                    })
                  }
                >
                  向vite发送数据
                </Button>
              </li>
            </>
          )}
          <li>
            <Button
              onClick={() => this.handleJumpToLogin()}
              type="link"
              danger
              block
            >
              {userInfo && Object.keys(userInfo).length > 0 ? '退出' : '去登录'}
            </Button>
          </li>
        </ul>
      </div>
    );

    const selectedKeys: string[] = [window.location.pathname];

    return (
      <div className="d-header">
        <div className="d-header-left">
          <span className="d-logo">
            <img src={window.G_CONFIG.system.logoUrl} alt="logo" />
          </span>
          <span
            className="d-header-title"
            onClick={() => this.handleJumpToPage('/welcome')}
          >
            {window.G_CONFIG.system.name}
          </span>
          <span className="d-header-company">
            {window.G_CONFIG.system.subName}
          </span>
          <Menu
            mode="horizontal"
            style={{
              backgroundColor: 'rgba(255,255,255,0)',
              color: 'rgba(255,255,255,1)',
            }}
            items={menuItems}
            onSelect={(e) => {
              this.handleSwitchMicroApp(e.key);
            }}
            selectedKeys={selectedKeys}
          />
        </div>
        <div className="d-header-right-box">
          <ul>
            <li style={{ marginLeft: 5 }}>
              <Tooltip title="查看操作手册" placement="bottom">
                <a
                  href={window.G_CONFIG.manualUrl}
                  target="view_window"
                  className="d-header-button-icon"
                >
                  <QuestionCircleOutlined
                    style={{ fontSize: 18, fontWeight: 600 }}
                  />
                </a>
              </Tooltip>
            </li>
            <li className="d-header-user">
              <Dropdown overlay={userInfoDOMs} placement="bottomRight">
                <div
                  style={{
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  {userAvatar ? (
                    <Avatar
                      size="small"
                      src={userAvatar}
                      style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
                    />
                  ) : (
                    <Avatar
                      size="small"
                      style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
                      src={avatarImg}
                    />
                  )}
                  <div className="d-name">
                    {userInfo && Object.keys(userInfo).length > 0
                      ? userName || '同学'
                      : '未登录'}
                  </div>
                </div>
              </Dropdown>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
