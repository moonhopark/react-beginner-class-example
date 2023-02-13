import React from 'react';

import './style.css';

const Input = ({ title, name, value, onChange, required, type, placeholder, autoComplete, signup }) => {
  return (
    <div className="input-wrapper">
      <div>
        {title}
        {!signup && required && (
          <div style={{ marginLeft: '5px', fontSize: '12px' }}>
            필수 <span style={{ color: 'red' }}>*</span>
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
