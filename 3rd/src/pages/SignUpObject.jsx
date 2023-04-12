import React, { useState } from 'react';

import Input from 'components/Input';
import './SignUp.css';

const SignUpPageObject = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    name: '',
    age: '',
  });

  const isPasswordCheckError = user.passwordCheck !== '' && user.password !== user.passwordCheck ? true : false;

  const handleChange = (e) => {
    setUser((prevUser) => {
      return {
        ...prevUser,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('제출', user);
    alert(`${user.name}님, 회원가입이 완료되었습니다!`);
  };

  const isAvailable = user.email && user.password && user.passwordCheck && user.name && !user.isPasswordCheckError;

  const handleResetClick = (e) => {
    e.preventDefault();
    setUser({
      email: '',
      password: '',
      passwordCheck: '',
      name: '',
      age: '',
    });
  };

  return (
    <div className="form-wrapper">
      <h1>회원가입</h1>
      <form className="form" onSubmit={handleSubmit}>
        <Input
          title="이메일"
          value={user.email}
          name="email"
          onChange={handleChange}
          required
          type="email"
          placeholder="이메일을 입력하세요"
        />
        <Input
          title="비밀번호"
          value={user.password}
          name="password"
          onChange={handleChange}
          required
          type="password"
          placeholder="비밀번호를 입력하세요"
          autoComplete="off"
        />
        <Input
          title="비밀번호 재확인"
          value={user.passwordCheck}
          name="passwordCheck"
          onChange={handleChange}
          required
          type="password"
          placeholder="비밀번호를 다시 입력하세요"
          autoComplete="off"
        />
        {isPasswordCheckError && <div style={{ fontSize: '12px', color: 'red' }}>비밀번호가 일치하지 않습니다.</div>}
        <Input
          title="이름"
          value={user.name}
          name="name"
          onChange={handleChange}
          required
          type="text"
          placeholder="이름을 입력하세요"
        />
        <Input title="나이" value={user.age} name="age" onChange={handleChange} type="number" placeholder="나이를 입력하세요" />
        <button className={isAvailable ? 'form-button' : 'form-button-disabled'} type="submit" disabled={!isAvailable}>
          가입하기
        </button>
        <button className="form-button-reset" onClick={handleResetClick}>
          리셋하기
        </button>
      </form>
    </div>
  );
};
export default SignUpPageObject;
