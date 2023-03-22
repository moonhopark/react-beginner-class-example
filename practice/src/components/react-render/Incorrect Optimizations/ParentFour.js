import React, { useState, useMemo, useCallback } from 'react';
import { MemoizedChildFive } from './ChildFive';

const ParentFour = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Moonho');

  const person = {
    firstName: 'Bruce',
    lastName: 'Wayne',
  };

  const memoizedPerson = useMemo(() => person, []);

  const handleClick = () => {};

  const memoizedHandleClick = useCallback(handleClick, []);

  console.log('ParentFour Render');
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName('Park')}>Change name</button>
      <MemoizedChildFive name={name} handleClick={memoizedHandleClick} />
      {/* <MemoizedChildFive name={name} person={memoizedPerson} /> */}
    </div>
  );
};

export default ParentFour;
