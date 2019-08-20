import React from 'react';
import Button from '../button';
import './style.css';

//TODO: mas reutilizable, agregar children
export default ({handleClick}) => {
    return(
        <div className="navBar-container">
            <h3 className="navBar-title"> DITAR CAR APP </h3>
            <Button onClick={handleClick}> ADD CAR </Button>
        </div>
    )
}