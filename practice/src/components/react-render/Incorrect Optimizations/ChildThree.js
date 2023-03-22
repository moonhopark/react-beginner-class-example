import React, { memo } from 'react';

const ChildThree = ({ children, name }) => {
  console.log('ChildThree Render');

  return (
    <div>
      {children} {name}
    </div>
  );
};

export const MemoizedChildThree = memo(ChildThree);
