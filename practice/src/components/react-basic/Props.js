import React from 'react';

const Props = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        name: {props.name}, age : {props.age}
      </h1>
      {props.children}
    </div>
  );
};

export default Props;
