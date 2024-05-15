import React, { useState } from 'react'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { BiLogoGmail } from 'react-icons/bi'
import { BiMessageRoundedDots } from "react-icons/bi";
import { FaWindowClose } from 'react-icons/fa';
import { PiQuotesBold } from 'react-icons/pi'
import { FaBlog } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { MdDashboard } from 'react-icons/md'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaUsers } from 'react-icons/fa'
import { GrProjects } from 'react-icons/gr'
import { CiMenuBurger } from "react-icons/ci"; 
import ReactImage from '../components/images/mypassport.png'; 
import './dashboard.css'
import '../styles/tablesStyles.css'
import Users from '../components/userscomponent/Users';
import { Navigate } from 'react-router-dom';
import Blogsmanagement from '../components/blogscomponent/Blogsmanagement';
import { BlogsProvider } from '../components/blogscomponent/BlogsContext';
import ContactsManagement from '../components/contact/ContactManagement';

import TestimoniesManagement from '../components/testimonies/TestimonyManagemeny';


function Dashboard () {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isfullScreen,setisFullScreen]=useState(false);

  const accessToken = localStorage.getItem('accessToken');
  if(!accessToken){
    // return < Navigate to='/login'/>
  }
  const toggleNavigation=()=>{
   setisFullScreen(!isfullScreen) 
  }
  return (
    <div className='dashboard-page'>
      <div className='blog-general-functionality'>
        <div className='search'>
          <h1>imanariyo baptiste</h1>
        </div>
        <div className='search-bar'>
          <AiOutlineSearch  className='icon' />
          <input type='text' id='subject1' name='subject' required />
        </div>
        <div className='left-side'>
          <div className='notifications'>
            <IoIosNotificationsOutline  className='icon'/>
            <BiMessageRoundedDots className='icon'/>
          </div>
          <div className='profile'>
  <img src={ReactImage} alt="React Logo" />
  <div className="profile-name"><span className='profile-name'>imanriyo</span></div>
</div>
        </div>
      </div>
      <div className='dashboard-sides'>
        <div className='sidebar' style={{ position: isfullScreen ? 'fixed' : 'sticky', top: isfullScreen ? '50px' : '55px' }}>
        <i id="open-sider" className='bx bx-menu' onClick={toggleNavigation}>
        {isfullScreen &&<CiMenuBurger className="open-sider-icon"/>}
        {!isfullScreen && <FaWindowClose className="open-sider-icon"/>}
        
       
        
       </i>
          <div className={`dash-nav ${isfullScreen?'not-currently':''}`}>
          <h2>logo</h2>
            <ul>
              <li>
                <a href='#dashboard'>
                  <MdDashboard className='icon' />dashboard
                </a>
              </li>
              <li>
                <a href='#projects'>
                  <AiFillGithub className='icon' />Projects
                </a>
              </li>
              <li>
                <a href='#portfolio'>
                  <GrProjects className='icon' />Portfolio
                </a>
              </li>
              <li>
                <a href='#users'>
                  <FaUsers className='icon' />Users
                </a>
              </li>
              <li>
                <a href='#contacts'>
                  <BiLogoGmail className='icon' />Contacts
                </a>
              </li>
              <li>
                <a href='#testimonials'>
                  <PiQuotesBold className='icon' />Testimonials
                </a>
              </li>
              <li>
                <a href='#blogs'>
                  <FaBlog className='icon' />blogs
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='dashboard-content content'>
          <div id='dashboard' className='section'>
            <h2>dashboard</h2>
            <div className='page-summary'>
              <ul>
                <li>
                  <a href='#dashboard'>
                    <MdDashboard className='icon' />
                    dashboard
                  </a>
                
                </li>
                <li>
                  <a href='#projects'>
                    <AiFillGithub className='icon' />Projects
                  </a>
                </li>
                <li>
                  <a href='#portfolio'>
                    <GrProjects className='icon' />Portfolio
                  </a>
                </li>
                <li>
                  <a href='#users'>
                    <FaUsers className='icon' />Users
                  </a>
                </li>
                <li>
                  <a href='#contacts'>
                    <BiLogoGmail className='icon' />Contacts
                  </a>
                </li>
                <li>
                  <a href='#testimonials'>
                    <PiQuotesBold className='icon' />Testimonials
                  </a>
                </li>
                <li>
                  <a href='#blogs'>
                    <FaBlog className='icon' />blogs
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div id='projects' className='section'>
            <h2>Projects</h2>
     
            {/* Projects content goes here */}
          </div>
          <div id='portfolio' className='section'>
            <h2>Portfolio</h2>
          
            {/* Portfolio content goes here */}
          </div>
          <div id='users' className='section'>
            <h2>Users</h2>
            {/* Users content goes here */}
            <Users/>
          </div>
          <div id='contacts' className='section'>
            <h2>Contacts</h2>
  
            {/* Contacts content goes here */}
            <ContactsManagement />
          </div>
          <div id='testimonials' className='section'>
            <h2>Testimonials</h2>
        
            {/* Testimonials content goes here */}
            <TestimoniesManagement/>
          </div>
          <div id='blogs' className='section'>
            <h2>blogs</h2>
     
            {/* Testimonials content goes here */}
            <BlogsProvider>
           < Blogsmanagement/>
            </BlogsProvider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
