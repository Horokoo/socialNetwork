import React from 'react';
import logo from '../images/logo.png'
import header from'../css/header.module.css';

let Header = () =>{
    return(
      <header className={header.header}>
        <img src={logo} className={header.logo}></img>
      </header>
    );
  }

export default Header;