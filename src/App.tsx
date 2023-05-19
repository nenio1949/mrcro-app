import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = (props: any) => {
  let navigate = useNavigate();

  useEffect(() => {
    navigate('/welcome');
  }, [props]);

  return <div style={{ textAlign: 'center', color: 'gray' }}>Loding...</div>;
};

export default Home;
