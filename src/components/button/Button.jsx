import React from 'react';
import './style.css';

export default ({onClick, children, isDisable}) =>
    <button disabled={isDisable} onClick={onClick} className="button"> {children} </button>;