import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from 'pages/Main';
import SignInPage from 'pages/SignIn';
import SignInObjectPage from 'pages/SignInObject';
import SignUpPage from 'pages/SignUp';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/signin" element={<SignInObjectPage />} />

        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
