import React, { useContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from 'components/Input';
import './SignIn.css';
import { UserContext } from 'App';

const initialState = {
  email: '',
  password: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'onChange':
      return {
        ...state,
        [action.name]: action.value,
      };

    default:
      return;
  }
};

const SignInReducerPage = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('제출', state);
    setUser(state.email);
    navigate('/');
  };

  return (
    <div className="form-wrapper">
      <h1>로그인</h1>
      <form className="form" onSubmit={handleSubmit}>
        <Input
          title="이메일"
          name="email"
          value={state.email}
          onChange={(e) => dispatch({ type: 'onChange', name: e.target.name, value: e.target.value })}
          required
          type="email"
          placeholder="이메일을 입력하세요"
        />
        <Input
          title="비밀번호"
          name="password"
          value={state.password}
          onChange={(e) => dispatch({ type: 'onChange', name: e.target.name, value: e.target.value })}
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
export default SignInReducerPage;
