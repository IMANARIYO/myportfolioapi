import React, { useEffect, useState } from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import home from '../images/mypassport.png';
import Title from '../layouts/Title';
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Homepage() {
    const [text] = useTypewriter({
    words :[
        "Web Developer",
        "UI/UX Designer",
        "Back End Developer",
        "Front end dev",
        "Mobile Developer"
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,  });

    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
 


    return (
        <div className="home-page" id="home">
            <div className="left-home-page p-8">
        
            <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize"> Baptiste</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I use animation as a third dimension by which to simplify experiences
          and kuiding thro each and every interaction. I'm not adding motion
          just to spruce things up, but doing it in ways that.
        </p>
      </div>
                     
                
                <div  className='my-intro'>
             <div className="basics">
                        <div className="findme">
                            <p>find with me</p>
                            <div className="findme-icons">
                                <FaXTwitter className='bx' />
                                <FaInstagram className='bx' />
                                <FaWhatsapp className='bx' />
                            </div>
                        </div>
                        <div className="best-skill-on">
                            <p>best skill on</p>
                            <div className="best-skill-on-icons">
                                <span>
                                {/* Figma */}
                                <FaFigma className='bx' />
                                </span>
                           <span>
                            {/* nodejs */}
                           <FaNodeJs className='bx' />
                           </span>
                           <span>
                                {/* react */}
                                <TbBrandReactNative className='bx' />
                           </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-home-page">
                <img src={home} alt="home"/>
            </div>
        </div>
    )
}

export default Homepage;
