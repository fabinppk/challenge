import React from 'react';
import './index.css';
import logo from '../../assets/logo.png';

const Header = () => {
    return (
        <header className="header-container">
            <img src={logo} alt="Logo" />
            <ul>
                <li>Link fake 1</li>
                <li>Link fake 2</li>
                <li>Link fake 3</li>
                <li>Link fake 4</li>
            </ul>
        </header>
    );
};

export default Header;
