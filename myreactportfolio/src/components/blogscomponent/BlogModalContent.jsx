import React from 'react'
import { useState } from 'react'
import { FiThumbsUp } from "react-icons/fi";
import './singleblog.css'
import { FaRegWindowClose } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { FiThumbsDown } from "react-icons/fi";
function BlogModalContent({ handleClose, props }) {
    
    const mapingusersandcomments=(comment)=>{
        let user=comment.user;
            {props.commentedBy}
            for(let i=0;i<props.commentedBy.length;i++){
             if(props.commentedBy[i]._id === user){
               return(
                 <img
                 className='single-user-profile-img'
                 src={props.commentedBy[i].image}
                 alt='User Profile'
               />
               );
               
             }
            }
     
     }
   
    const { image, title, description, views, likes, dislikes, comments} = props;
  
    return (
      <div className="modal-container">
        <div className='blog-container'>
          <div className="modol-closing" onClick={handleClose}>
            <FaRegWindowClose />
          </div>
          <img className='signle-blog-main-img' src={image} frameBorder='0' allowFullScreen />
          <h1>{title}</h1>
          <p>{description}</p>
          <div className='button-group'>
            <button className="blog-button views"><AiOutlineEye />:{views}</button>
            <button className="blog-button likes "><FiThumbsUp />:{likes}</button>
            <button className="blog-button dislikes"><FiThumbsDown />:{dislikes}</button>
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
              <button className='comment comment-button'>comment</button>
              <button className='comment cancel-button'>cancel</button>
            </div>
            <div className='comments'>
              {comments.map(comment => (
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
      </div>
    );
  }
  
  export default BlogModalContent;