
import React, { useState } from 'react';
import logo from '../images/mypassport.png'; 
import { FaWindowClose } from 'react-icons/fa';
import { CiMenuBurger } from "react-icons/ci"; 
import { AiOutlineLogin } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";

function HeadNavBar() {
  const [isActive, setIsActive] = useState(false);

  const toggleNavigation = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="head-nav-bar">
      <div className="head">

        <div className="main-logo">
          <img src={logo} alt="Logo" />
          <span className="log chars">I.B</span>
        </div>
        <i id="open" className='bx bx-menu' onClick={toggleNavigation}><CiMenuBurger/></i>
    
        <ul className={`navigation ${isActive ? 'active' : ''}`}  onClick={toggleNavigation}>
        <li>  <i id="close" className='bx bx-window-close' onClick={toggleNavigation}><FaWindowClose /></i></li> 
          <li onClick={toggleNavigation}><a href="#home">HOME</a></li>
          <li><a href="#features">FEATURES</a></li>
          <li><a href="#portfolio">PORTFOLIO</a></li>
          <li><a href="#resume">RESUME</a></li>
          <li><a href="#testimony">TESTIMONIAL</a></li>
          <li><a href="#clients">CLIENTS</a></li>
          <li><a href="#blog">BLOG</a></li>
          <li><a href="#contact">CONTACTS</a></li>
          <li className="authentication">
            <a href="./homepages/login.html">
              <i className='bx bx-log-in-circle'><AiOutlineLogin /></i>
              <span className="login">LOGIN</span>
            </a>
            <i className='bx bx-log-out-circle' style={{ display: 'none' }}> <AiOutlineLogout/></i>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeadNavBar;
