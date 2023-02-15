import React from 'react';

import Input from 'components/Input';
import './SignUp.css';

const SignUpPage = () => {
  return (
    <div className="form-wrapper">
      <h1>회원가입</h1>
      <form className="form">
        <Input title="이메일" required type="email" placeholder="이메일을 입력하세요" />
        <Input title="비밀번호" required type="password" placeholder="비밀번호를 입력하세요" />
        <Input title="비밀번호 재확인" required type="password" placeholder="비밀번호를 다시 입력하세요" />
        <Input title="이름" required type="text" placeholder="이름을 입력하세요" />
        <Input title="나이" type="number" placeholder="나이를 입력하세요" />
        <button className="form-button" type="submit">
          가입하기
        </button>
      </form>
    </div>
  );
};
export default SignUpPage;
