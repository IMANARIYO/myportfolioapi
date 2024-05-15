import React, { useEffect, useState } from 'react';
import logo from '../images/mypassport.png'; 
import { FaWindowClose } from 'react-icons/fa';
import { CiMenuBurger } from "react-icons/ci"; 
import { AiOutlineLogin } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";
import LoginForm from '../userscomponent/Login';

function HeadNavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false); 

  const toggleNavigation = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      setIsLoggedIn(true);
    }
  }, []); 

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false); // Update isLoggedIn state upon logout
    alert('Logged out successfully!');
  };

  const toggleLoginForm = () => {
    setIsLoginFormOpen(!isLoginFormOpen);
  };

  return (
    <div>
      <div className="head-nav-bar">
        <div className="head">
          <div className="main-logo">
            <img src={logo} alt="Logo" />
            <span className="log chars">I.B</span>
          </div>
          <i id="open" className='bx bx-menu' onClick={toggleNavigation}><CiMenuBurger/></i>
      
          <ul className={`navigation ${isActive ? 'active' : ''}`}  onClick={toggleNavigation}>
            <li>  
              <i id="close" className='bx bx-window-close' onClick={toggleNavigation}><FaWindowClose /></i>
            </li> 
            <li onClick={toggleNavigation}><a href="#home">HOME</a></li>
            <li><a href="#features">FEATURES</a></li>
            <li><a href="#portfolio">PORTFOLIO</a></li>
            <li><a href="#resume">RESUME</a></li>
            <li><a href="#testimony">TESTIMONIAL</a></li>
            <li><a href="#clients">CLIENTS</a></li>
            <li><a href="#blog">BLOG</a></li>
            <li><a href="#contact">CONTACTS</a></li>
            <li className="authentication">
              {isLoggedIn ? (
                // If logged in, display Logout button
                <a href="#" onClick={handleLogout}>
                  <i className='bx bx-log-out-circle'><AiOutlineLogout/></i>
                  <span className="login">Logout</span>
                </a>
              ) : (
                // If not logged in, display Login button
                <a href="#" onClick={toggleLoginForm}>
                  <i className='bx bx-log-in-circle'><AiOutlineLogin /></i>
                  <span className="login">Login</span>
                </a>
              )}
            </li>
          </ul>
        </div>
      </div>
      
      {/* Conditionally render the LoginForm component based on isLoginFormOpen state */}
      {isLoginFormOpen && <LoginForm className='absolute top-20px'/>}
    </div>
  );
}

export default HeadNavBar;
