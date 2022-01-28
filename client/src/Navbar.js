import React from "react";
// importing react hooks
import { useState } from "react";
import { Link } from "react";

//component imports
import Home from "./Home";
import Contact from "./Contact";

import Projects from "./Projects";
import WorkHistory from "./WorkHistory";
import Interests from "./Interests";
import Dropdown from "./Dropdown";


function Navbar () {
    const [click, setClick] = useState(false);
    const [dropdown, setDropDown] = useState(false);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropDown(false);
        } else {
            setDropDown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropDown(false);
        } else {
            setDropDown(false);
        }
    }
    return (
        <>
        <nav className="navbar" id="anchor">
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <div className="nav-menu-wrapper">
            <ul classname={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                    <Link to = "/" component={Home} onClick={closeMobileMenu}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link to = "/about-me" component={AboutMe} onClick={closeMobileMenu}>About Me</Link>
                </li>
               
                <li className="nav-item">
                    <Link to = "/work-history" component={WorkHistory} onClick={closeMobileMenu}>Work History</Link>
                </li>
                <li className="nav-item">
                    <Link to = "/interests" component={Interests} onClick={closeMobileMenu}>Interests</Link>
                </li>
                <li className="nav-item">
                    <Link to = "/projects" component={Projects} onClick={closeMobileMenu}>Projects</Link>
                    {dropdown && <Dropdown />}
                </li>
                <li className="nav-item">
                    <Link to = "/contact" component={Contact} onClick={closeMobileMenu}>Contact</Link>
                </li>
               
            </ul>
        </div>
        </nav>
        </>
    )

}

export default Navbar;