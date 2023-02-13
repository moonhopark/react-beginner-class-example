import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SinginForm from 'components/SignInForm';
import SingupForm from 'components/SignUpForm';
import Main from 'components/Main';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/signin" element={<SinginForm />} />

        <Route path="/signup" element={<SingupForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
