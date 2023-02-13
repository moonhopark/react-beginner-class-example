import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('token')) navigate('/signin');
  }, [navigate]);

  return <main style={{ fontSize: '30px' }}>메인페이지</main>;
};

export default Main;
