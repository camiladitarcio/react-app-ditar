import React from "react";
import classNames from "classnames";
import "./style.css";

const Button = ({ children, onClick, float, primary, secondary }) => {
  return (
    <button 
        onClick={onClick} 
        className={classNames("btn", {'float': float, "primary": primary, "secondary": secondary})}
    >
      {children}
    </button>
  );
};

export default Button;
