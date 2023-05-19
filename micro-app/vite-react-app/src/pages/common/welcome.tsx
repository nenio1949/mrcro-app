import React, { useEffect } from 'react';
import LayoutHoc from '@/components/layouts';
import { Button, message } from 'antd';

const App = () => {
  useEffect(() => {
    window.eventCenterForViteReactApp?.addDataListener(dataListener);
  }, []);

  const dataListener = (data: any) => {
    message.info(data.data);
  };

  /** 向主应用发送数据 */
  const handleSendDataToMainApp = () => {
    window.eventCenterForViteReactApp.dispatch({
      data: '来自子应用vite-react-app的数据',
    });
  };

  return (
    <>
      <h2 style={{ textAlign: 'center' }}>vite-react-app欢迎页</h2>
      <Button type="primary" onClick={() => handleSendDataToMainApp()}>
        向主应用发送数据
      </Button>
    </>
  );
};

export default LayoutHoc(App);
