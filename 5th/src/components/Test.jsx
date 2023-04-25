import React from 'react';

const Test = ({ isPasswordCheckError }) => {
  console.log('Test rendering');
  return <div>Test - {isPasswordCheckError}</div>;
};

export default React.memo(Test);
