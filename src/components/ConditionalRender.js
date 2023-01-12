import React, { useState } from 'react';

const ConditionalRender = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <div>
          Welcome<button onClick={() => setIsLoggedIn(false)}>LogOut</button>
        </div>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>LogIn</button>
      )}
    </div>
  );
};

export default ConditionalRender;
