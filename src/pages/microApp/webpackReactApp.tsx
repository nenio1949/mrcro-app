import React, { useEffect } from 'react';
import LayoutHoc from '@/components/layouts';

const Home = () => {
  useEffect(() => {}, []);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <micro-app
        name="webpack-react-app"
        url="http://localhost:3002/webpack-react-app/welcome"
        // baseroute="/webpack-react-app"
        inline // 使用内联script模式
        disableSandbox // 关闭沙箱
      ></micro-app>
    </div>
  );
};
export default LayoutHoc(Home);
