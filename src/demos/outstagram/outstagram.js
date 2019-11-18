import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Main from './main';
import Navbar from './navbar';
import './style.css';

const Outstagram = () => {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <Main />
            </div>
        </Router>
    );
}

export default Outstagram;
