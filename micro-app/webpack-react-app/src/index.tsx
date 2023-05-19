import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.min.css';
import './assets/css/app.less';
import { ConfigProvider, message } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import Routes from './routes/index';
import reportWebVitals from './reportWebVitals';
import './public-path';
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

console.log('已进入子应用webpack-react-app');

// 👇 将渲染操作放入 mount 函数，子应用初始化时会自动执行
window.mount = () => {
  ReactDOM.render(
    <ConfigProvider locale={zhCN}>
      <Routes />
    </ConfigProvider>,
    document.getElementById('webpack-app')
  );
};

// 👇 将卸载操作放入 unmount 函数
window.unmount = () => {
  let rootElement = document.getElementById('webpack-app');
  if (rootElement) {
    ReactDOM.unmountComponentAtNode(rootElement);
    console.log('微应用webpack-react-app卸载了 -- UMD模式');
  }
};

// 如果不在微前端环境，则直接执行mount渲染
if (!window.__MICRO_APP_ENVIRONMENT__) {
  window.mount();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
