import React from "react";

const NavBar = () => {
    return (
        <div>
            <div className="navbar-top-container">
                <div>
                    <ul className="ul-navbar">
                        <li className="li-navbar ul-li"><a className="href-li bold-light" href="/">Home</a></li>
                        <li className="li-navbar ul-li"><a className="href-li bold-light" href="/">Store</a></li>
                        <li className="li-navbar ul-li"><a className="href-li bold-light" href="/">About us</a></li>
                        <li className="li-navbar ul-li"><a className="href-li bold-light" href="/">Contact</a></li>
                        <li className="li-navbar ul-li"><a className="href-li bold-light" href="/">Work</a></li>
                    </ul>
                </div>
            </div>
            <div className="top-line-home"></div>
        </div>
    );
}

export default NavBar;