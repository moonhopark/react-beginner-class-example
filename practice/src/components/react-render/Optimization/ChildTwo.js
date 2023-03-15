import React, { memo } from 'react';

const ChildTwo = () => {
  console.log('ChildTwo Render');

  return <div>ChildTwo component</div>;
};

export default memo(ChildTwo);
