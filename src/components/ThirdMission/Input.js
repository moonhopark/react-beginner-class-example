import React from 'react';

const Input = ({ name, value, onChange, required, type, placeholder, autoComplete }) => {
  return (
    <input
      className="form-input"
      required={required}
      type={type}
      placeholder={placeholder}
      autoComplete={autoComplete}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
