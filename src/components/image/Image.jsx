import React from 'react';
import "./style.css";

const Image = ({src}) => {
    return(
        <img src={src} className="image"></img>
    )
}

export default Image;