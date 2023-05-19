import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = (props: any) => {
  let navigate = useNavigate();

  useEffect(() => {
    navigate('/welcome');
    console.log('成功加载微应用webpack-react-app', window);
  }, [props]);

  return <div style={{ textAlign: 'center', color: 'gray' }}>Loding...</div>;
};

export default Home;
