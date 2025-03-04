import React, { useState, useEffect } from "react";
import style from '../style/navbar.module.css';

const Navbar = () => {
    return (
        <nav className='navbar fixed-top navbar-expand-lg navbar-light bg-light'>
            <div className="container-fluid">
                <div className={`${style.titlePosition}`}>
                    <a className={`navbar-brand ${style.TwoPerLine}`} href="#">Brandon Stevenson</a>
                    <p className={`${style.TitleFont} ${style.TwoPerLine}`}>Software Engineer</p>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse row" id="navbarNav">
                    <ul className={`navbar-nav ${style.navLinks}`}>
                        <li className={`'nav-item' ${style.col}`}>
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className={`'nav-item' ${style.col}`}>
                            <a className="nav-link active" href="#">Resume</a>
                        </li>
                        <li className={`'nav-item' ${style.col}`}>
                            <a className="nav-link active" href="#" aria-disabled="true">Projects</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;