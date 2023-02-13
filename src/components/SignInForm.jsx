import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Input from 'components/common/Input';
import './style.css';

const SigninForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeAge = (e) => {
    setAge(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('제출', { email, password, age });
  };

  return (
    <div className="form-wrapper">
      <h1>로그인</h1>
      <form className="form" onSubmit={handleSubmit}>
        <Input value={email} onChange={handleChangeEmail} required type="email" placeholder="이메일을 입력하세요" />
        <Input value={password} onChange={handleChangePassword} required type="password" placeholder="비밀번호를 입력하세요" />
        <Input value={age} onChange={handleChangeAge} type="number" placeholder="나이를 입력하세요" />
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
