import React from 'react';
import { Provider } from 'mobx-react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import stores from '@/stores';
import App from '../App';
import Welcome from '@/pages/common/welcome';
import Login from '@/pages/common/login';
import ChangePassword from '@/pages/common/changePassword';
import MicroViteReactApp from '@/pages/microApp/viteReactApp';
import MicroWebpackReactApp from '@/pages/microApp/webpackReactApp';
// 重置body背景
const { body } = document;
body.style.background = '#FFF';

const configRoutes = [
  {
    path: '/',
    name: '首页',
    main: <App />,
  },
  {
    path: '/welcome',
    name: '欢迎页',
    main: <Welcome />,
  },
  {
    path: '/login',
    name: '登录',
    main: <Login />,
  },
  {
    path: '/change-password',
    name: '修改密码',
    main: <ChangePassword />,
  },
  {
    path: '/vite-react-app/:path',
    name: '微应用vite-react-app',
    main: <MicroViteReactApp />,
  },
  {
    path: '/webpack-react-app/:path',
    name: '微应用webpack-react-app',
    main: <MicroWebpackReactApp />,
  },
];

const RouteConfigs = () => {
  return (
    <Provider {...stores}>
      <BrowserRouter>
        <Routes>
          {configRoutes.map((route, index) => {
            return <Route key={index} path={route.path} element={route.main} />;
          })}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default RouteConfigs;
