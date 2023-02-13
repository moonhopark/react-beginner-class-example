import React, { useState } from 'react';
import Input from './Input';

import './style.css';

const Form = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    age: 0,
  });

  const handleChangeUser = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('제출', user);
  };

  return (
    <div className="form-wrapper">
      <h1>계정 정보를 입력하세요.</h1>
      <form className="form" onSubmit={handleSubmit}>
        <Input
          name="email"
          value={user.email}
          onChange={handleChangeUser}
          required
          type="email"
          placeholder="이메일을 입력하세요"
        />
        <Input
          name="password"
          value={user.password}
          onChange={handleChangeUser}
          required
          type="password"
          placeholder="비밀번호를 입력하세요"
        />
        <Input
          name="passwordCheck"
          value={user.passwordCheck}
          onChange={handleChangeUser}
          required
          type="password"
          placeholder="비밀번호를 다시 입력하세요"
        />
        <Input name="age" value={user.age} onChange={handleChangeUser} type="number" placeholder="나이를 입력하세요" />
        <button className="form-button" type="submit">
          가입하기
        </button>
      </form>
    </div>
  );
};
export default Form;
