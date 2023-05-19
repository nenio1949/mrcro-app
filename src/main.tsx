import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './assets/css/app.less';
import { ConfigProvider, message } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import Routes from './routes/index';
import microApp, { EventCenterForMicroApp } from '@micro-zoe/micro-app';
import 'moment/dist/locale/zh-cn';
import './config/global';
import './utils';
import './config/window.d'; // 全局声明
import './config/legacy.d'; // 声明无ts版本的模块

// 日期汉化
moment.locale('zh-cn');
// 全局提示持续2秒
message.config({
  duration: 2,
});

// 重置body背景
const { body } = document;
body.style.background = '#FFF';

// 注意：每个vite子应用根据appName单独分配一个通信对象
window.eventCenterForViteReactApp = new EventCenterForMicroApp(
  'vite-react-app'
);

window.eventCenterForWebpackReactApp = new EventCenterForMicroApp(
  'webpack-react-app'
);

microApp.start({
  lifeCycles: {
    created() {
      console.log('created 全局监听');
    },
    beforemount() {
      console.log('beforemount 全局监听');
    },
    mounted() {
      console.log('mounted 全局监听');
    },
    unmount() {
      console.log('unmount 全局监听');
    },
    error() {
      console.log('error 全局监听');
    },
  },
  plugins: {
    modules: {
      'vite-react-app': [
        {
          loader(code: string) {
            if (import.meta.env.VITE_NODE_ENV === 'development') {
              code = code.replace(
                /(from|import)(\s*['"])(\/vite-react-app\/)/g,
                (all) => {
                  return all.replace(
                    '/vite-react-app/',
                    'http://localhost:3001/vite-react-app/'
                  );
                }
              );
              // code = code.replace('window.location.port', '3001');
            }
            return code;
          },
        },
      ],
      'webpack-react-app': [
        {
          loader(code: string) {
            if (
              import.meta.env.VITE_NODE_ENV === 'development' &&
              code.indexOf('sockjs-node') > -1
            ) {
              // code = code.replace(
              //   /(from|import)(\s*['"])(\/webpack-react-app\/)/g,
              //   (all) => {
              //     return all.replace(
              //       '/webpack-react-app/',
              //       'http://localhost:3002/'
              //     );
              //   }
              // );
              code = code.replace('window.location.port', '3002');
            }
            return code;
          },
        },
      ],
    },
  },
});
ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Routes />
  </ConfigProvider>,
  document.getElementById('root')
);
microApp.start();
