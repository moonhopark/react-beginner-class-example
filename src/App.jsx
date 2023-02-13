import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SinginForm from 'components/SignInForm';
import SingupForm from 'components/SignUpForm';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SinginForm />} />

        <Route path="/signup" element={<SingupForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
