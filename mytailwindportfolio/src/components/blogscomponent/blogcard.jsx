import React from 'react'
import { useState } from 'react'
import { FiThumbsUp } from "react-icons/fi";
import './singleblog.css'
import { FaRegWindowClose } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { FiThumbsDown } from "react-icons/fi";
import BlogModalContent from './BlogModalContent';
function Singleblogmodal (props) {

  const [modal, setModal] = useState(false)

  const handleClose = () => {
    setModal(!modal);
  };
// alert(props.readmin)

  return (
    <div className='
    w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000   
    ' key={props._id}>
      <div className='w-full h-[80%] overflow-hidden rounded-lg'>
        <img 
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
        src={props.image} alt='' />
      </div>
      <div className='flex  flex-col items-center justify-between'>
        <div className='blog-upper'>
          <div className='blog-category'>
            <span className="text-base uppercase text-designColor font-normal">
              {props.category}
            </span>
            
          </div>
          <div className='text-base uppercase text-designColor font-normal'>
            {props.readmin}reading-min
          </div>
        </div>
        <div className='blog-lower'>
          {props.title}
        </div>
      </div>
      <button
        className='read-more-btn '
        onClick={()=>{setModal(!modal)}}
      >
        Read More
      </button>
   
      {modal && <BlogModalContent handleClose={handleClose} props={props} />}

    </div>
  )
}

export default Singleblogmodal


