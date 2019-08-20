import React from 'react';
import './style.css';

const NavBar = ({title, sticky}) => {
    return(
        <div className="navbar-container">
            {title}
        </div>
    )
}

export default NavBar;