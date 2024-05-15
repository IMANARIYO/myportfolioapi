import React, { useEffect, useState } from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import home from '../images/mypassport.png';


function Homepage() {
    const words = [
        "Web Developer",
        "UI/UX Designer",
        "Back End Developer",
        "Full Stack Engineer",
        "Mobile Developer"
    ];

    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
    const [displayedWord, setDisplayedWord] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentLetterIndex < words[currentWordIndex].length) {
                setDisplayedWord(prevWord => prevWord + words[currentWordIndex].charAt(currentLetterIndex));
                setCurrentLetterIndex(prevIndex => prevIndex + 1);
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    setDisplayedWord("");
                    setCurrentLetterIndex(0);
                    setCurrentWordIndex((currentWordIndex + 1) % words.length);
                },2000);
            }
        },100);
        return () => clearInterval(interval);
    }, [currentWordIndex, currentLetterIndex]);

    return (
        <div className="home-page" id="home">
            <div className="left-home-page">
                <div className="section-title">
                    <span className="subtitle sub-title">Welcome Home</span>
                    <h1 className="title sub-title home-title">Hi IMANARIYO baptiste <label id="skills">
                    {displayedWord}
                  </label>
                  </h1>
                </div>
                <div  className='my-intro'>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis quos, ex cupiditate cum voluptatibus
                        enim nihil itaque atque error incidunt obcaecati beatae amet delectus e</p>
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
                                <FaFigma className='bx' />
                                <FaNodeJs className='bx' />
                                <TbBrandReactNative className='bx' />
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
