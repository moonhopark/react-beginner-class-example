import React, { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import SignUpPage from 'pages/SignUp';
import SignUpReducerPage from 'pages/SignUpReducer';
import MainPage from 'pages/Main';

export const UserContext = createContext();

const App = () => {
  const [user, setUser] = useState('');

  return (
    <UserContext.Provider value={{ user, setUser }}>
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
