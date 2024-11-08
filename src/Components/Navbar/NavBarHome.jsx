import React, { Children, useState } from 'react'
import mainlogo from "../../assets/images/logo.jpg"
import { Link } from 'react-router-dom';

export default function NavBarHome() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleIconClass = isMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';

    const handleToggleClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
            <header className="container-fluid header">
                <div className="navbar container">
                    <div className="logo" onclick="window.location.href='index.html'">
                        <img src={mainlogo} className="mainlogo" alt="TriDizi logo" />
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
            </header>
        </>
    )
}
