import React from 'react';

import './Input.css';

const Input = ({ title, required, ...rest }) => {
  return (
    <div className="input-wrapper">
      <div>
        <label>{title}</label>
        {required && (
          <div className="input-required">
            필수 <span>*</span>
          </div>
        )}
      </div>
      <input className="input" required={required} {...rest} />
    </div>
  );
};

export default Input;
