import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Input from 'components/common/Input';
import './style.css';

const SigninForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('token', email);
    navigate('/');
    console.log('제출', { email, password });
  };

  return (
    <div className="form-wrapper">
      <h1>로그인</h1>
      <form className="form" onSubmit={handleSubmit}>
        <Input
          title="이메일"
          value={email}
          onChange={handleChangeEmail}
          required
          type="email"
          placeholder="이메일을 입력하세요"
          signup
        />
        <Input
          title="비밀번호"
          value={password}
          onChange={handleChangePassword}
          required
          type="password"
          placeholder="비밀번호를 입력하세요"
          signup
        />
        <button className="form-button" type="submit">
          로그인
        </button>
        <div className="form-signup-link">
          계정이 없으신가요? <Link to="/signup">회원가입</Link>
        </div>
      </form>
    </div>
  );
};
export default SigninForm;
