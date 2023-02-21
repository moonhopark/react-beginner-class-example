import { UserContext } from 'App';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate('/signup');
  }, [user, navigate]);

  return <main style={{ fontSize: '30px' }}>안녕하세요, {user}님</main>;
};

export default MainPage;
