import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
// import { contactImg } from '../../assets/index'

const ContactLeft = () => {
  return (
    <div className='w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center'>
      <img
        className='w-full h-64 object-cover rounded-lg mb-2'
        src={`https://www.google.com/imgres?q=handshaking&imgurl=https%3A%2F%2Fcdn2.hubspot.net%2Fhubfs%2F53%2FUntitled%2520design-14.png&imgrefurl=https%3A%2F%2Fwww.hubspot.com%2Fcareers-blog%2Fwhy-your-handshake-matters-and-how-to-perfect-it&docid=Qcu9HnGBqGEkNM&tbnid=cWxrJyd7kq-unM&vet=12ahUKEwiV4fLztLKFAxW0QvEDHdtDA0IQM3oECBoQAA..i&w=560&h=315&hcb=2&ved=2ahUKEwiV4fLztLKFAxW0QvEDHdtDA0IQM3oECBoQAA`}
        alt='contactImg'
      />
      <div className='flex flex-col gap-4'>
        <h3 className='text-3xl font-bold text-white'>John Doe</h3>
        <p className='text-lg font-normal text-gray-400'>
          MERN Stack Developer
        </p>
        <p className='text-base text-gray-400 tracking-wide'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          ipsam autem cumque, accusantium dicta odio.
        </p>
        <p className='text-base text-gray-400 flex items-center gap-2'>
          Phone: <span className='text-lightText'>+968 97859628</span>
        </p>
        <p className='text-base text-gray-400 flex items-center gap-2'>
          Email: <span className='text-lightText'>noor.jsdivs@gmail.com</span>
        </p>
      </div>

    <div className="basics">
          <div className="findme">
                        <p>find with me</p>
                        <div className="findme-icons text-white">
                            <FaXTwitter  className='bx'/>
                            <FaInstagram  className='bx'/>
                            <FaWhatsapp   className='bx' />
                        </div>
                    </div>
            
          </div>
    </div>
  )
}

export default ContactLeft
