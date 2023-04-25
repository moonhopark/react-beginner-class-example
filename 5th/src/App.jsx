import React, { createContext, useReducer } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from 'pages/Main';
import SignUpReducerPage from 'pages/SignUpReducer';

export const UserContext = createContext();

const initialState = {
  email: '',
  password: '',
  passwordCheck: '',
  name: '',
  age: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'onChange':
      return {
        ...state,
        [action.name]: action.value,
      };
    case 'reset':
      return initialState;
    default:
      return;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ userState: state, userDispatch: dispatch }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signup" element={<SignUpReducerPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;
