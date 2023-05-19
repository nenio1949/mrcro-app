import React, { useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import menuData from '@/config/menu';

const { Sider } = Layout;

const styles: any = {
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  sider: {
    flex: 1,
    overflowY: 'auto',
    overflowX: 'hidden',
  },
  collapse: {
    height: 36,
    width: '100%',
  },
};

const Home = () => {
  const thisMenuStatus: any =
    window.G_LOCALSTORAGE.get('_MENU_STATUS') || 'open';

  const [isCollapsed, setIsCollapsed] = useState<boolean>(
    thisMenuStatus === 'collapse'
  );

  // 处理菜单折叠
  const handleMenuCollapsed = () => {
    const currentValue = !isCollapsed;

    window.G_LOCALSTORAGE.set(
      '_MENU_STATUS',
      currentValue ? 'collapse' : 'open'
    );

    setIsCollapsed(currentValue);
  };

  const selectMenuKeys: any = window.G_OPERATE.splitUrlParams();
  const defaultOpenKeys: string[] = [selectMenuKeys[0]];
  const selectedKeys: string[] = [selectMenuKeys.join('_')];

  return (
    <div className="d-sidebar" style={{ ...styles.container }}>
      <Sider
        collapsible
        collapsed={isCollapsed}
        trigger={null}
        theme="light"
        style={styles.sider}
        width={240}
      >
        <Menu
          mode="inline"
          defaultOpenKeys={defaultOpenKeys}
          selectedKeys={selectedKeys}
          items={menuData}
        />
      </Sider>
      <div style={styles.collapse}>
        <Button
          type="text"
          block
          onClick={handleMenuCollapsed}
          style={{ padding: '2px 0' }}
        >
          {React.createElement(
            isCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined
          )}
        </Button>
      </div>
    </div>
  );
};

export default Home;
