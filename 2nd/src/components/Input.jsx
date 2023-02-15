import React from 'react';

import './Input.css';

const Input = ({ title, required, type, placeholder, signup }) => {
  return (
    <div className="input-wrapper">
      <div>
        <label>{title}</label>
        {!signup && required && (
          <div className="input-required">
            필수 <span>*</span>
          </div>
        )}
      </div>
      <input className="input" required={required} type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;
