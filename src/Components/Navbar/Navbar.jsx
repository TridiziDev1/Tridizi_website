import React, { useState } from 'react'
import mainlogo from "../../assets/images/mainlogo.png"
import "./Navbar.css"
import { Link } from 'react-router-dom';
export default function Navbar({ children, bgImage }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleIconClass = isMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';

    const handleToggleClick = ({ }) => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        
            <header className="container-fluid header aboutNav"
                style={{
                    backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.99), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})`,
                    backgroundSize: 'cover', // Ensures the background image covers the entire area
                    backgroundPosition: 'center', // Center the background image
                }}
            >
                <div className="navbar container">
                    <div className="logo">
                        <Link to={"/"}>
                        <img src={mainlogo} style={{height: '264px', width: '250px', margin: '-81px -70px'}}  alt='TriDizi-logo'/>
                        </Link>
                    </div>
                    <ul className="links">
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/about"}>About</Link>
                        </li>
                        <li>
                            <Link to={"/branding"}>Branding</Link>
                        </li>
                        <li>
                            <Link to={"/designing"}>Designing</Link>
                        </li>
                        <li>
                            <Link to={"/developing"}>Developing</Link>
                        </li>
                        <li>
                            <Link to={"/contact"}>Contact</Link>
                        </li>
                    </ul>
                    <div className="toggle_btn" onClick={handleToggleClick}>
                        <i className={toggleIconClass}></i>
                    </div>
                </div>
                <div className={`dropdown_menu ${isMenuOpen ? 'open' : ''}`}>
                    <ul className="links">
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/about"}>About</Link>
                        </li>
                        <li>
                            <Link to={"/branding"}>Branding</Link>
                        </li>
                        <li>
                            <Link to={"/designing"}>Designing</Link>
                        </li>
                        <li>
                            <Link to={"/developing"}>Developing</Link>
                        </li>
                        <li>
                            <Link to={"/contact"}>Contact</Link>
                        </li>
                    </ul>
                </div>

                {children}
            </header>
        
    )
}

