import React from 'react';

import './Input.css';

const Input = ({ title, name, value, onChange, required, type, placeholder, autoComplete }) => {
  return (
    <div className="input-wrapper">
      <div>
        {title}
        {required && (
          <div className="input-required">
            필수 <span>*</span>
          </div>
        )}
      </div>
      <input
        className="input"
        required={required}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
