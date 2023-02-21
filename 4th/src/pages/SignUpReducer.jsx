import React, { useReducer, useCallback, useContext } from 'react';

import Input from 'components/Input';
import { UserContext } from 'App';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';

const initialState = {
  email: '',
  password: '',
  passwordCheck: '',
  name: '',
  age: '',
  isPasswordCheckError: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'onChange':
      return {
        ...state,
        [action.name]: action.value,
      };
    case 'onChangePasswordCheck':
      return {
        ...state,
        passwordCheck: action.value,
        isPasswordCheckError: state.password !== action.value ? true : false,
      };
    case 'reset':
      return {
        email: '',
        password: '',
        passwordCheck: '',
        name: '',
        age: '',
        isPasswordCheckError: false,
      };
    default:
      return;
  }
};

const SignUpReducerPage = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);

  const { email, password, passwordCheck, name, age, isPasswordCheckError } = state;

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log('제출', state);
      setUser(state.name);
      navigate('/');
      // alert(`${name}님, 회원가입이 완료되었습니다!`);
    },
    [state, navigate, setUser]
  );

  const isFilled = useCallback(() => {
    if (email && password && passwordCheck && name && !isPasswordCheckError) {
      return true;
    } else {
      return false;
    }
  }, [email, password, passwordCheck, name, isPasswordCheckError]);

  return (
    <div className="form-wrapper">
      <h1>회원가입</h1>
      <form className="form" onSubmit={handleSubmit}>
        <Input
          title="이메일"
          name="email"
          value={email}
          onChange={(e) => dispatch({ type: 'onChange', name: e.target.name, value: e.target.value })}
          required
          type="email"
          placeholder="이메일을 입력하세요"
        />
        <Input
          title="비밀번호"
          name="password"
          value={password}
          onChange={(e) => dispatch({ type: 'onChange', name: e.target.name, value: e.target.value })}
          required
          type="password"
          placeholder="비밀번호를 입력하세요"
          autoComplete="off"
        />
        <Input
          title="비밀번호 재확인"
          name="passwordCheck"
          value={passwordCheck}
          onChange={(e) => dispatch({ type: 'onChangePasswordCheck', name: e.target.name, value: e.target.value })}
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
          onChange={(e) => dispatch({ type: 'onChange', name: e.target.name, value: e.target.value })}
          required
          type="text"
          placeholder="이름을 입력하세요"
        />
        <Input
          title="나이"
          name="age"
          value={age}
          onChange={(e) => dispatch({ type: 'onChange', name: e.target.name, value: e.target.value })}
          type="number"
          placeholder="나이를 입력하세요"
        />
        <button className={isFilled() ? 'form-button' : 'form-button-disabled'} type="submit" disabled={!isFilled()}>
          가입하기
        </button>
        <button className="form-button-reset" onClick={() => dispatch({ type: 'reset' })}>
          리셋하기
        </button>
      </form>
    </div>
  );
};
export default SignUpReducerPage;
