import React, { useState } from 'react';

import Input from 'components/Input';
import './SignIn.css';

const SignInObjectPage = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChangeUser = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    // setUser((user[e.target.name] = e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('제출', user);
  };

  return (
    <div className="form-wrapper">
      <h1>로그인</h1>
      <form className="form" onSubmit={handleSubmit}>
        <Input
          title="이메일"
          name="email"
          value={user.email}
          onChange={handleChangeUser}
          required
          type="email"
          placeholder="이메일을 입력하세요"
        />
        <Input
          title="비밀번호"
          name="password"
          value={user.password}
          onChange={handleChangeUser}
          required
          type="password"
          placeholder="비밀번호를 입력하세요"
          autoComplete="off"
        />
        <button className="form-button" type="submit">
          로그인
        </button>
      </form>
    </div>
  );
};
export default SignInObjectPage;
