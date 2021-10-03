import React from 'react';
import './Header.css'
import { Nav, Navbar } from 'react-bootstrap';
import image from '../../images/manchester-united.png';
import Typewriter from 'typewriter-effect';

const Header = () => {
    return (
        <div className="p-3">
            <Navbar className="" expand="lg">
                <Navbar.Brand href="#">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Team</Nav.Link>
                        <Nav.Link href="#action2">About</Nav.Link>
                        <Nav.Link href="#action3">Contact</Nav.Link>
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