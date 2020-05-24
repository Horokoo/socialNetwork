import React from 'react';
import nav from'../css/nav.module.css';

let Nav = () => {
    return (
        <nav className={nav.nav}>
            <div className={nav.paragraphOfMenu}>
                <a href="#">
                    Profile
            </a>
            </div>
            <div className={nav.paragraphOfMenu}>
                <a href="#">
                    Messages
                </a>
            </div>
            <div className={nav.paragraphOfMenu}>
                <a href="#">
                    News
                </a>
            </div>
            <div className={nav.paragraphOfMenu}>
                <a href="#">
                    Music
                </a>
            </div>
            <div className={`${nav.paragraphOfMenu} ${nav.settings}`}>
                <a href="#">
                    Settings
                </a>
            </div>
        </nav>
    );
}

export default Nav;