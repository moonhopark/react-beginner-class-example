import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignUpPage from 'pages/SignUp';
import SignUpReducerPage from 'pages/SignUpReducer';
import SignInPage from 'pages/SignIn';
import SignInReducerPage from 'pages/SignInReducer';
import MainPage from 'pages/Main';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/signin" element={<SignInReducerPage />} />

        <Route path="/signup" element={<SignUpReducerPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
