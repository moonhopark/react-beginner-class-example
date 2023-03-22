import React, { useState } from 'react';
import { MemoizedChildFive } from './ChildFive';

const ParentFour = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Moonho');

  const person = {
    firstName: 'Bruce',
    lastName: 'Wayne',
  };

  const handleClick = () => {};

  console.log('ParentFour Render');
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName('Park')}>Change name</button>

      <MemoizedChildFive name={name} handleClick={handleClick} />
    </div>
  );
};

export default ParentFour;
