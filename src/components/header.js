import React from 'react';
import logo from '../images/logo.png'

let Header = () =>{
    return(
      <header className="header">
        <img src={logo} className='logo'></img>
      </header>
    );
  }

export default Header;