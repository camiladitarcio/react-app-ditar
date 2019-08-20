import React from 'react';
import './style.css';

export default ({ placeholder, label, value, onChange, name, isError, messageError, onBlur }) =>
    <>
        <label> {label} </label>
        <input placeholder={placeholder} value={value} onChange={onChange} name={name} onBlur={onBlur} />
        {isError && <p>{messageError}</p>}
    </>;