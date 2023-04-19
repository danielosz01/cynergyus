import React, { Fragment } from "react";
import { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter, Route, Link, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



export const Navbar = () => {
    const [ fix, setFix ] = useState(false)

    function setFixed() {
        if (window.scrollY >= 12) {
            console.log('fixed')
            setFix(true)
        } else {
            setFix(false)
        }
    }

    window.addEventListener('scroll', setFixed)

    return (
        <Fragment> 
            <nav className={fix ? 'navbar navbar-expand-md navbar-dark navbar-custom top-nav-collapse fixed-top': 'navbar navbar-expand-md navbar-dark navbar-custom fixed-top'}>
                
                    <a className="navbar-brand logo-image" href=""><img src='/assets/images/logo.svg' alt="alternative"/></a> 

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-awesome fas fa-bars"></span>
                        <span className="navbar-toggler-awesome fas fa-times"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav ml-auto">
                            <Nav.Link className="nav-item">
                                <Link to={"/"} className="nav-link page-scroll" href="">Home <span className="sr-only">(current)</span></Link>
                            </Nav.Link>
                            <Nav.Link className="nav-item">
                                <Link to={"/about"} className="nav-link page-scroll" href="about">About</Link>
                            </Nav.Link>

                            
                            <Nav.Link className="nav-item dropdown">
                                <Link to={'/services'} className="nav-link dropdown-toggle page-scroll" href="/services" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">Services</Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link to={'/iso'} className="dropdown-item" href="services/iso"><span className="item-text">ISO</span></Link>
                                    <div className="dropdown-items-divide-hr"></div>
                                    <Link to={'/responsibility'} className="dropdown-item" href="services/responsibility"><span className="item-text">Responsibility</span></Link>
                                    <div className="dropdown-items-divide-hr"></div>
                                    <Link to={'/capability'} className="dropdown-item" href="services/capability"><span className="item-text">Capability</span></Link>
                                    <div className="dropdown-items-divide-hr"></div>
                                    <Link to={'/quality'} className="dropdown-item" href="services/quality"><span className="item-text">Quality Policy</span></Link>
                                </div>
                            </Nav.Link>
                        
                            <Nav.Link className="nav-item">
                                <Link to={'/software'} className="nav-link page-scroll" href="software">Software</Link>
                            </Nav.Link>
                            
                            <Nav.Link className="nav-item">
                                <Link to={'/videos'} className="nav-link page-scroll" href="videos">Videos</Link>
                            </Nav.Link>

                            <Nav.Link className="nav-item">
                                <Link to={'/contact'} className="nav-link page-scroll" href="contact">Contact</Link>
                            </Nav.Link>
                            <Nav.Link className="nav-item">
                                <a className="employee-login-btn" href="https://portal.cynergy1.com/cynergy/?ojr=Main" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-user"></i>Employee Login</a>
                            </Nav.Link>
                        </ul>
                        <span className="nav-item social-icons">
                            <span className="fa-stack">
                                
                            </span>
                            
                        </span>
                    </div>
                

                
            </nav>
            <Outlet />
        </Fragment>

    );
  };