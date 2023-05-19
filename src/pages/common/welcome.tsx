/*
 * @Description:欢迎页
 * @Author: yong.li
 * @Date: 2021-12-27 10:25:49
 * @LastEditors: yong.li
 * @LastEditTime: 2022-10-08 13:33:01
 */
import React from 'react';
import { Image } from 'antd';
import LayoutHOC from '@/components/layouts';
import WelcomeImg from '@/assets/img/welcome.png';

const Home = () => {
  window.G_OPERATE.setDocumentTitle('首页');
  return (
    <div
      className="d-container"
      style={{ height: '100%', backgroundColor: 'rgba(255,255,255,1)' }}
    >
      <div className="d-container-body" style={{ textAlign: 'center' }}>
        <Image src={WelcomeImg} height={300} preview={false} />
        <div style={{ padding: 5, fontSize: 20 }}>
          欢迎访问{window.G_CONFIG.system.name}主应用
        </div>
        {/* <div>
          <Button
            type="primary"
            style={{ marginRight: 16 }}
            onClick={() =>
              handleSendDataToMicroApp('webpack-react-app', {
                data: '来自主应用的数据',
              })
            }
          >
            向子应用webpack-react-app发送数据
          </Button>
          <Button
            type="primary"
            onClick={() =>
              handleSendDataToMicroApp('vite-react-app', {
                data: '来自主应用的数据',
              })
            }
          >
            向子应用vite-react-app发送数据
          </Button>
        </div> */}
      </div>
    </div>
  );
};

export default LayoutHOC(Home);
