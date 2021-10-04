import React, { useState } from 'react';
import './Header.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme, darkTheme } from './themes';
import { Nav, Navbar } from 'react-bootstrap';
import image from '../../images/manchester-united.png';
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

const Header = () => {
    const [theme, setTheme] = useState("light");
    const [darkMode, setDarkMode] = useState(true);

    const themeToggle = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    }
    return (
        <div className="p-3">
            <Navbar className="" expand="lg">
                <Navbar.Brand href="#" className="navbar-style">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" className="bg-info" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link className="navbar-style" href="#action1">Team</Nav.Link>
                        <Nav.Link className="navbar-style"  href="#action2">About</Nav.Link>
                        <Nav.Link className="navbar-style" href="#action3">Contact</Nav.Link>
                        <Nav.Link>
                            <ThemeProvider theme={theme === "dark" ? lightTheme : darkTheme}>
                                <GlobalStyles />
                                <button className="btn btn-outline-info" onClick={() => [themeToggle(), setDarkMode(!darkMode)]}> {darkMode ? "light" : "dark"} <FontAwesomeIcon icon={faMoon} /> </button>
                            </ThemeProvider>
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="row header-background">
                <div className="col-8 d-flex align-items-center">
                    <h1 className="header-text">Manchester united
                        <br />
                        <Typewriter
                            options={{
                                strings: ['Together We are Strong...', 'Believe and Support Us...'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                </div>
                <div className="col-4">
                    <img className="w-100" src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;