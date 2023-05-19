import React from 'react';
import { Provider } from 'mobx-react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '@/App';
import Welcome from '@/pages/common/welcome';
import NoMatch from '@/pages/common/noMatch';

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
    path: '*',
    name: '404',
    main: <NoMatch />,
  },
];

const RouteConfigs = () => {
  return (
    <Provider>
      <BrowserRouter basename="vite-react-app">
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
