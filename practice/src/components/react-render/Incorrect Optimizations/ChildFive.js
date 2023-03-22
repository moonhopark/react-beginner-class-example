import React, { memo } from 'react';

const ChildFive = ({ name }) => {
  console.log('ChildFive Render');

  return <div>Hello {name}</div>;
};

export const MemoizedChildFive = memo(ChildFive);
