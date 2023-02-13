import React from 'react';

import styles from './style.module.css';

const Input = ({ title, name, value, onChange, required, type, placeholder, autoComplete }) => {
  return (
    <div className={styles.Wrapper}>
      <div>
        {title}
        {required && (
          <div style={{ marginLeft: '5px', fontSize: '12px' }}>
            필수 <span style={{ color: 'red' }}>*</span>
          </div>
        )}
      </div>
      <input
        className={styles.Input}
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
