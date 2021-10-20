import React from 'react';
import { Button, Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <div className="container">
                <Link className="navbar-brand fst-italic banner-text-container" to="/home">
                    <img src={logo} className="header-logo" alt="" width="40" height="35" />
                    <span className="header-first-text fs-4">Health</span><span className="fw-bold">Plus<small className="care-text-style">Care</small></span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Nav.Link as={HashLink} to="/home#home">HOME</Nav.Link>
                        </li>
                        <li className="nav-item">
                            <Nav.Link as={HashLink} to="/home#about">ABOUT US</Nav.Link>
                        </li>
                        <li className="nav-item">
                            <Nav.Link as={HashLink} to="/home#services">SERVICES</Nav.Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/doctor"></Link>
                        </li>
                        <li className="nav-item">
                            <Nav.Link as={HashLink} to="/doctor">DOCTORS</Nav.Link>
                        </li>
                        <li className="nav-item">
                            <Nav.Link as={HashLink} to="/home#contuct">CONTUCT US</Nav.Link>
                        </li>
                        <li className="nav-item">
                            <Nav.Link as={HashLink} to="/home#membershop">MEMBERSHIP</Nav.Link>
                        </li>
                    </ul>
                    <Navbar.Text className="me-2">
                        Signed in as: <a href="#login">{user?.displayName}</a>
                    </Navbar.Text>
                    <NavLink to="/login">
                        {user.email ? <Button onClick={logOut} className="fw-bold" variant="light">Log out</Button> :
                            <button type="button" className="btn btn-primary me-2 fw-bold">Login</button>}
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Header;