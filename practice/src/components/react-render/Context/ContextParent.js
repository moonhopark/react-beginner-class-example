import React, { createContext, useState } from 'react';
// import { ChildA, MemoizedChildA } from './ContextChildren';

export const CountContext = createContext();

const ContextParent = ({ children }) => {
  const [count, setCount] = useState(0);

  console.log('ContextParent Render');
  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>Count {count}</button>
      <CountContext.Provider value={count}>
        {/* <ChildA /> */}
        {/* <MemoizedChildA /> */}
        {children}
      </CountContext.Provider>
    </>
  );
};

export default ContextParent;
