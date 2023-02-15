import React, { useState } from 'react';

const State = () => {
  const [name, setName] = useState('moonho');

  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default State;
