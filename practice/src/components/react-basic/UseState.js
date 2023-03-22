import React, { useState } from 'react';

const UseState = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // setCount(count + 1);
    // console.log(count);
    // setCount(count + 1);
    // console.log(count);
    setCount((prev) => prev + 1);
    console.log(count);
    setCount((prev) => prev + 1);
    console.log(count);
  };

  return (
    <div>
      <button onClick={handleClick}>Count {count}</button>
    </div>
  );
};

export default UseState;
