import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import SinginForm from 'components/ThirdMission/SignInForm';
import SingupForm from 'components/ThirdMission/SignUpForm';

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">로그인</Link>
          </li>
          <li>
            <Link to="/signup">회원가입</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<SinginForm />} />

        <Route path="/signup" element={<SingupForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
