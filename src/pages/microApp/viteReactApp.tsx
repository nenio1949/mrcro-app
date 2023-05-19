import React, { useEffect } from 'react';
import LayoutHoc from '@/components/layouts';

const Home = () => {
  useEffect(() => {}, []);

  return (
    <div style={{ width: '100%' }}>
      <micro-app
        name="vite-react-app"
        url="http://localhost:3001/vite-react-app/welcome"
        // baseroute="/vite-react-app"
        inline // 使用内联script模式
        disableSandbox // 关闭沙箱
      ></micro-app>
    </div>
  );
};
export default LayoutHoc(Home);
