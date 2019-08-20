import React from "react";
import "./style.css";

const Input = ({ value, placeholder, onChange, name }) => (
  <input
    name={name}
    value={value}
    placeholder={placeholder}
    className="input"
    onChange={onChange}
  />
);

export default Input;
