import React from 'react';
import './style.css';
import Button from '../button';

export default ({show, handleClick, children}) => {
    return(
        show &&
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                    <Button onClick={() => handleClick()}> CLOSE </Button>
                    </div>
                    {children}
                </div>
            </div>
    )
};