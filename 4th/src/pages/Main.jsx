import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('token')) navigate('/signin');
  }, [navigate]);

  return <main style={{ fontSize: '30px' }}>안녕하세요, {localStorage.getItem('token')}님</main>;
};

export default MainPage;
