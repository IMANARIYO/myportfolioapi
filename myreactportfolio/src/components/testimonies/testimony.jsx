import React, { useState } from 'react'
import './Testimonials.css';
// import'../../styles/Home.css'
import testimonialImage from '../images/mypassport.png'
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
function Testimonials() {
  return (
    <div className="section testimony" id="testimony">
      <div className="section-title">
        <span className="subtitle sub-title">Read our Testimonials</span>
        <h1 className="title sub-title">Explore Testimonials</h1>
      </div>
      {/* Your content for testimony section goes here */}
      <div className="main-testimonies-container" id="testimony">
        {/* Testimonial 1 */}
        <div className="single-testimony display-grid">
          <div className="profile">
            <div className="profile-image">
              <img src={testimonialImage} />
            </div>
            <div className="basic-profile">
              <span>rain-bow-themes</span>
              <h3>imanariyo baptiste00</h3>
              <div className="h6">chief operating officer</div>
            </div>
          </div>

          <div className="profile-description">
            <div className="icons">
              <div className="quotes"><i className='bx bxs-quote-right'></i></div>
              <div className="navigators">
                <div className="navigators-1"><AiOutlineArrowLeft  className='bx'/></div>
                <div className="navigators-2"><AiOutlineArrowRight  className='bx'/></div>
              </div>
            </div>
            <div className="main-description">
              <div className="upper-low">
                <div className="main-upper-low-description">
                  <div className="company-name">
                    <h3>
                      klab coding company
                    </h3>
                  </div>
                  <div className="period">2023-august-2023</div>
                </div>
                <div className="rating">5%</div>
              </div>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit.
                               Fugit odio
                                voluptates accusamus repudiandae in eius sequi consequatur provident incidunt cum velit,
                                distinctio quasi unde architecto et tempore quia facere voluptas.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
