import React, { useEffect } from 'react';
import { Button, message } from 'antd';
import LayoutUnit from '@/components/layouts';

const App = () => {
  useEffect(() => {
    window.eventCenterForWebpackReactApp?.addDataListener(dataListener);
  }, []);

  const dataListener = (data: any) => {
    message.info(data.data);
  };

  /** 向主应用发送数据 */
  const handleSendDataToMainApp = () => {
    window.eventCenterForWebpackReactApp.dispatch({
      data: '来自子应用webpack-react-app的数据',
    });
  };
  return (
    <>
      <div style={{ textAlign: 'center' }}>webpack-react-app欢迎页</div>
      <Button type="primary" onClick={() => handleSendDataToMainApp()}>
        向主应用发送数据
      </Button>
    </>
  );
};

export default LayoutUnit(App);
