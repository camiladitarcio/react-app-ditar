import React from "react";
import "./style.css";

const Button = ({children, onClick}) => {
    return(
        <button onClick={onClick}>{children}</button>
    )
}

export default Button;