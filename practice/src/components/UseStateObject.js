import React, { useState } from 'react';

const UseStateObject = () => {
  const [countObject, setCountObject] = useState({
    firstCount: 0,
    secondCount: 0,
  });

  const handleClickFirstCount = () => {
    setCountObject({
      ...countObject,
      firstCount: countObject.firstCount + 1,
    });
    // setCountObject((prev) => ({
    //   ...prev,
    //   firstCount: prev.firstCount + 1,
    // }));
  };

  const handleClickSecondCount = () => {
    setCountObject({
      ...countObject,
      secondCount: countObject.secondCount + 1,
    });
    // setCountObject((prev) => {
    //   return {
    //     ...prev,
    //     secondCount: prev.secondCount + 1,
    //   };
    // });
  };

  return (
    <div>
      <button onClick={handleClickFirstCount}>Count {countObject.firstCount}</button>
      <button onClick={handleClickSecondCount}>Count {countObject.secondCount}</button>
    </div>
  );
};

export default UseStateObject;
