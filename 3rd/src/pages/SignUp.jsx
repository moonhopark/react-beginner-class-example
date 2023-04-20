import React, { useEffect, useState } from 'react';

import Input from 'components/Input';
import './SignUp.css';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const [isPasswordCheckError, setIsPasswordCheckError] = useState(false);

  useEffect(() => {
    passwordCheck !== '' && password !== passwordCheck ? setIsPasswordCheckError(true) : setIsPasswordCheckError(false);
  }, [password, passwordCheck]);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangePasswordCheck = (e) => {
    setPasswordCheck(e.target.value);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeAge = (e) => {
    setAge(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('제출', { email, password, passwordCheck, name, age });
    alert(`${name}님, 회원가입이 완료되었습니다!`);
    handleResetClick();
  };

  const isAvailable = email && password && passwordCheck && name && !isPasswordCheckError;

  const handleResetClick = () => {
    setEmail('');
    setPassword('');
    setPasswordCheck('');
    setName('');
    setAge('');
  };

  return (
    <div className="form-wrapper">
      <h1>회원가입</h1>
      <form className="form" onSubmit={handleSubmit}>
        <Input
          title="이메일"
          value={email}
          onChange={handleChangeEmail}
          required
          type="email"
          placeholder="이메일을 입력하세요"
        />
        <Input
          title="비밀번호"
          value={password}
          onChange={handleChangePassword}
          required
          type="password"
          placeholder="비밀번호를 입력하세요"
          autoComplete="off"
        />
        <Input
          title="비밀번호 재확인"
          value={passwordCheck}
          onChange={handleChangePasswordCheck}
          required
          type="password"
          placeholder="비밀번호를 다시 입력하세요"
          autoComplete="off"
        />
        {isPasswordCheckError && <div style={{ fontSize: '12px', color: 'red' }}>비밀번호가 일치하지 않습니다.</div>}
        <Input title="이름" value={name} onChange={handleChangeName} required type="text" placeholder="이름을 입력하세요" />
        <Input title="나이" value={age} onChange={handleChangeAge} type="number" placeholder="나이를 입력하세요" />
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
export default SignUpPage;
