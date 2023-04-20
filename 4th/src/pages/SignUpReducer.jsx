import React, { useContext } from 'react';

import Input from 'components/Input';
import './SignUp.css';
import { UserContext } from 'App';

const SignUpReducerPage = () => {
  const { userState, userDispatch } = useContext(UserContext);
  const { email, password, passwordCheck, name, age } = userState;

  const isPasswordCheckError = passwordCheck !== '' && password !== passwordCheck ? true : false;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('제출', userState);

    alert(`${userState.name}님, 회원가입이 완료되었습니다!`);
    userDispatch({ type: 'reset' });
  };

  const isAvailable = email && password && passwordCheck && name && !isPasswordCheckError;

  return (
    <div className="form-wrapper">
      <h1>회원가입</h1>
      <form className="form" onSubmit={handleSubmit}>
        <Input
          title="이메일"
          name="email"
          value={email}
          onChange={(e) => userDispatch({ type: 'onChange', name: e.target.name, value: e.target.value })}
          required
          type="email"
          placeholder="이메일을 입력하세요"
        />
        <Input
          title="비밀번호"
          name="password"
          value={password}
          onChange={(e) => userDispatch({ type: 'onChange', name: e.target.name, value: e.target.value })}
          required
          type="password"
          placeholder="비밀번호를 입력하세요"
          autoComplete="off"
        />
        <Input
          title="비밀번호 재확인"
          name="passwordCheck"
          value={passwordCheck}
          onChange={(e) => userDispatch({ type: 'onChange', name: e.target.name, value: e.target.value })}
          required
          type="password"
          placeholder="비밀번호를 다시 입력하세요"
          autoComplete="off"
        />
        {isPasswordCheckError && <div style={{ fontSize: '12px', color: 'red' }}>비밀번호가 일치하지 않습니다.</div>}
        <Input
          title="이름"
          name="name"
          value={name}
          onChange={(e) => userDispatch({ type: 'onChange', name: e.target.name, value: e.target.value })}
          required
          type="text"
          placeholder="이름을 입력하세요"
        />
        <Input
          title="나이"
          name="age"
          value={age}
          onChange={(e) => userDispatch({ type: 'onChange', name: e.target.name, value: e.target.value })}
          type="number"
          placeholder="나이를 입력하세요"
        />
        <button className="form-button" type="submit" disabled={!isAvailable}>
          가입하기
        </button>
        <button className="form-button-reset" onClick={() => userDispatch({ type: 'reset' })}>
          리셋하기
        </button>
      </form>
    </div>
  );
};
export default SignUpReducerPage;
