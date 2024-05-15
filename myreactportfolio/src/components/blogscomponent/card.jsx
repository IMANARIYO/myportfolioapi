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

  // const mapingusersandcomments=(comment)=>{
  //    let user=comment.user;
  //        {props.commentedBy}
  //        for(let i=0;i<props.commentedBy.length;i++){
  //         if(props.commentedBy[i]._id === user){
  //           return(
  //             <img
  //             className='single-user-profile-img'
  //             src={props.commentedBy[i].image}
  //             alt='User Profile'
  //           />
  //           );
            
  //         }
  //        }
  
  // }

  return (
    <div className='single-blog' key={props._id}>
      <div className='image'>
        <img src={props.image} alt='' />
      </div>
      <div className='blog-presentation'>
        <div className='blog-upper'>
          <div className='blog-category'>
            <span>
              {props.category}
            </span>
          </div>
          <div className='min-read'>
            {props.readmin}
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


{/* <div className="modal-container">
      
      <div className='blog-container'>
      <div className="modol-closing" onClick={handleClose}>
               <FaRegWindowClose />
             </div>
         <img  className='signle-blog-main-img' src={props.image} frameBorder='0' allowFullScreen/>
           <h1>{props.title}</h1>
           <p>{props.description}</p>
           <div className='button-group'>
             <button className="blog-button views"><AiOutlineEye />:{props.views}</button>
             <button className="blog-button likes "><FiThumbsUp />:{props.likes}</button>
             <button className="blog-button dislikes"><FiThumbsDown />:{props.dislikes}</button>
           </div>
           <div id='comments'>
             <h2>comments</h2>
             <textarea
               id='comment-input'
               rows='4'
               cols='50'
               placeholder='Add a comment'
             />
             <div className='button-group'>
               <button  className='comment comment-button'>comment</button>
               <button  className='comment cancel-button'>cancel</button>
             </div>
             <div className='comments'>
 
           
             
                {props.comments.map(comment => (
                 
                   <div className='single-user-comment' key={comment._id}>
                  
 {mapingusersandcomments(comment)}
                     <div className='single-user-comment-content'>
                       <div className='single-user-comment-userName'>
                         <strong>{comment.username}:</strong>
                       </div>
                       <div className='single-user-comment-message'>{comment.comment}</div>
                       <div className='button-group'>
                         <button className='single-comment-like-dislike'>Likes: 0</button>
                         <button className='single-comment-like-dislike'>Dislikes: 0</button>
                       </div>
                     </div>
                   </div>
                 ))}
             </div>
           </div>
       </div>
      </div> */}