import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css';
import { height } from '@mui/system';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <nav className="navbar navbar-inverse">
        <div className="container-fluid">
            <div className="navbar-header">
            <a className="navbar-brand" href="#">Recipe Book</a>
            </div>
            <ul className="nav navbar-nav">
            <li className="active"><a href="#">Home</a></li>
            <li className="active"><a href="\account">Account</a></li>
            <li className="active"><a href="#">Account</a></li>
            </ul>
        </div>
        </nav>
    );
};

export default NavigationBar;
