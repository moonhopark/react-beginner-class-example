import React from 'react';

const Input = (props) => {
  return <input required={props.required} type={props.type} placeholder={props.placeholder} className="form-input" />;
};

export default Input;
