import React from 'react';

let Nav = () => {
    return (
        <nav className='nav'>
            <div className="paragraphOfMenu">
                <a href="#">
                    Profile
            </a>
            </div>
            <div className="paragraphOfMenu">
                <a href="#">
                    Messages
                </a>
            </div>
            <div className="paragraphOfMenu">
                <a href="#">
                    News
                </a>
            </div>
            <div className="paragraphOfMenu">
                <a href="#">
                    Music
                </a>
            </div>
            <div className="paragraphOfMenu settings">
                <a href="#">
                    Settings
                </a>
            </div>
        </nav>
    );
}

export default Nav;