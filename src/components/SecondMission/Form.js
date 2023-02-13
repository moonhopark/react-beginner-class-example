import React from 'react';
import Input from './Input';

import './style.css';

const Form = () => {
  return (
    <div className="form-wrapper">
      <h1>계정 정보를 입력하세요.</h1>
      <form className="form">
        <Input required type="email" placeholder="이메일을 입력하세요" />
        <Input required type="password" placeholder="비밀번호를 입력하세요" />
        <Input type="number" placeholder="나이를 입력하세요" />
        <button className="form-button" type="submit">
          로그인
        </button>
      </form>
    </div>
  );
};
export default Form;
