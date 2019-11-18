import React from 'react';
import './style.css';
import { Link } from "react-router-dom";
import outstaLogo from './../../images/outstaLogo.png';
import messagesLogo from './../../images/messagesLogo.png';

const Navbar = () => {
    return (
        <nav className="sticky-navbar">
            <Link to="/" style={{ textDecoration: 'none' }}>
                <img src={outstaLogo} alt="Home" className="home-icon"/>
                <h4 className="navbar-content">| Outstagram</h4>
            </Link>
            <Link to="/messages">
                <div className="messages-icon">
                    <img src={messagesLogo} alt="Messages"/>
                </div>
            </Link>
        </nav>
    );
}

export default Navbar;