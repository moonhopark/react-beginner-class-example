import React, { createContext, useReducer } from 'react';

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
      <SignUpReducerPage />
    </UserContext.Provider>
  );
};

export default App;
