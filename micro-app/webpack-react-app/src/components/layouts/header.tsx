import React, { Component } from 'react';
import { Avatar, Dropdown, Button, Modal, Tooltip, Menu } from 'antd';
import {
  ExclamationCircleOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import menuItems from '@/config/menu';
import { withRouter, RoutedProps } from '../withRouter';

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
  handleSwitchMicroApp = (appName: string) => {
    this.props.navigate(`/${appName}`);
  };

  render() {
    let lastName;
    const userInfo: any = window.G_LOCALSTORAGE.get('_USER_INFO') || {};

    const { name: userName, avatar: userAvatar } = userInfo;

    if (userName) {
      lastName = userName.slice(0, 1);
    }

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
          >
            {userAvatar || lastName || 'F'}
          </Avatar>
        )}
        <ul>
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
              onClick={() => this.handleJumpToLogin()}
              type="link"
              danger
              block
            >
              退出
            </Button>
          </li>
        </ul>
      </div>
    );

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
            // selectedKeys={[headerSelected?.id] as unknown as string[]}
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
                    >
                      {userAvatar || lastName || 'F'}
                    </Avatar>
                  )}
                  <div className="d-name">{userName || '同学'}</div>
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
