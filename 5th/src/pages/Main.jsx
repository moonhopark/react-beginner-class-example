import React, { useContext, useEffect } from 'react';
import { UserContext } from 'App';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const { userState } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userState.name) navigate('/signup');
  }, [userState, navigate]);

  return <div>{userState.name}님 환영합니다!</div>;
};

export default MainPage;
