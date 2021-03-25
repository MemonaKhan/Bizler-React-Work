import React from "react";
import logo3 from "../img/logo-3.png";

const Navbar = () => {
    return (


                <header className="header index-2">

                    <div className="container">

                        <nav className="navbar navbar-expand-lg">

                            <h2 className="nav-brand">
                                <a className="navbar-brand" href="#" title="Bizler">
                                    <img src={logo3} alt="Bizler"/>
                                </a>
                            </h2>

                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-content" aria-controls="nav-content" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"/>
                                <span className="navbar-toggler-icon"/>
                                <span className="navbar-toggler-icon"/>
                            </button>

                            <div className="main-menu collapse navbar-collapse" id="nav-content">

                                <ul className="navbar-nav">

                                    <li className="nav-item dropdown active">
                                        <a className="nav-item nav-link" href="#">Home</a>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">About Us</a>
                                        <ul className="dropdown-menu">
                                            <li className="dropdown-item">
                                                <a href="#">About Us 1</a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Services</a>
                                        <ul className="dropdown-menu">
                                            <li className="dropdown-item">
                                                <a href="#" title="Services 3">Services 3</a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Portfolio</a>
                                        <ul className="dropdown-menu">
                                            <li className="dropdown-item">
                                                <a href="#" title="Services">Portfolio 3 Column</a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Blog</a>
                                        <ul className="dropdown-menu">
                                            <li className="dropdown-item">
                                                <a href="#" title="Blog Detail">Blog Detail</a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item dropdown megamenu">
                                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Pages</a>
                                        <ul className="dropdown-menu megamenu">

                                            <li className="megamenu-column">
                                                <ul>
                                                    <li className="dropdown-item">
                                                        <a href="#" title="Homepage 3">Homepage 3</a>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="megamenu-column">
                                                <ul>
                                                    <li className="dropdown-item">
                                                        <a href="#" title="Services 2">Services 3</a>
                                                    </li>
                                                    <li className="dropdown-item">
                                                        <a href="#" title="Service Detail">Service Detail</a>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="megamenu-column">
                                                <ul>
                                                    <li className="dropdown-item">
                                                        <a href="#" title="Our Team 2">Our Team 2</a>
                                                    </li>
                                                    <li className="dropdown-item">
                                                        <a href="#" title="Our Team 2">Our Team 3</a>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="megamenu-column">
                                                <ul>
                                                    <li className="dropdown-item">
                                                        <a href="#" title="Blog 3 Column 2">Blog 3 Column 2</a>
                                                    </li>
                                                </ul>
                                            </li>

                                        </ul>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Contact Us</a>
                                        <ul className="dropdown-menu">
                                            <li className="dropdown-item">
                                                <a href="#" title="Contact Us 2">Contact Us 2</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </header>

            );
}

export default Navbar