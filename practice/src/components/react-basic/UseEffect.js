import React, { useState, useEffect } from 'react';

const UseState = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  //   useEffect(() => {
  //     console.log('컴포넌트가 렌더링 될 때마다 실행');
  //   });

  //   useEffect(() => {
  //     console.log('컴포넌트가 처음 렌더링 될 때 실행');
  //   }, []);

  useEffect(() => {
    console.log('컴포넌트가 첫 렌더링랑 countOne이 변할 때마다 실행', countOne);
    return () => {
      console.log('countOne이 변하기 전', countOne);
    };
  }, [countOne]);

  useEffect(() => {
    return () => {
      console.log('컴포넌트가 사라질 떄 실행');
    };
  }, []);

  const handleClickCounterOne = () => {
    setCountOne(countOne + 1);
  };

  const handleClickCounterTwo = () => {
    setCountTwo(countTwo + 1);
  };

  return (
    <div>
      <button onClick={handleClickCounterOne}>CountOne {countOne}</button>
      <button onClick={handleClickCounterTwo}>CountTwo {countTwo}</button>
    </div>
  );
};

export default UseState;
