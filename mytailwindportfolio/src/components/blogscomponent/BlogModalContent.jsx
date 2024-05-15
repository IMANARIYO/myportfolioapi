import React, { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';


import { FaRegWindowClose } from 'react-icons/fa';
import { AiOutlineEye } from 'react-icons/ai';
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi';
import './singleblog.css';
import LoginForm from '../userscomponent/Login';

function BlogModalContent({ handleClose, props }) {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisLiked] = useState(false);
  const [likes, setLikes] = useState(props.likes);
  const [dislikes, setDislikes] = useState(props.dislikes);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([]);
  
  const accessToken = localStorage.getItem('accessToken');
  const userId=localStorage.getItem('userId');

  useEffect(() => {
    // Fetch comments when the component mounts or when the props change
    fetchComments();
    checkLikedStatusAndCheckDisLikedStatus();
  }, [props]);
  
  const checkLikedStatusAndCheckDisLikedStatus = async () => {
    if (!accessToken) return;
    try {
      const response = await axios.get(`http://localhost:3330/Blogs/getBlog/${props._id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      // Check if the current user has liked or disliked the blog
      setLiked(response.data.data.likedBy.includes(userId));
      setDisLiked(response.data.data.dislikedBy.includes(userId));
    } catch (error) {
      console.error('Error checking liked status:', error);
    }
  };






  const handleliking=async()=>{
    if (!accessToken) {
      alert('Please log in to comment.');
      toggleLoginForm();
      return;
    }
    try {
      const response = await axios.post(
        `http://localhost:3330/Blogs/likeBlog/${props._id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          }
        }
        ); 
        alert(response.data.message);
        setLiked(true);
        if(response.data.success)
      setLikes(likes + 1); 
      } catch (error) {
        console.error('Error liking blog:', error);
        alert('An error occurred while liking the blog.');
     
    }
   
    
  
  }
  const handleDislike = async () => {
    if (!accessToken) {
      alert('Please log in to dislike.');
      toggleLoginForm();
      return;
    }
    try {
      const response = await axios.post(
        `http://localhost:3330/Blogs/dislikeBlog/${props._id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      alert(response.data.message);
      setDisLiked(true);
      if(response.data.success)
      setDislikes(dislikes + 1); 
    } catch (error) {
      console.error('Error disliking blog:', error);
      alert('An error occurred while disliking the blog.');
    }
  };
  const fetchComments = async () => {
    try {
      const response = await axios.get(`http://localhost:3330/comments/${props._id}`);
      const sortedComments = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setComments(sortedComments);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };
  
  
  const { image, title, description, views } = props;

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = async () => {
   
    if (!accessToken) {
      alert('Please log in to comment.');
      toggleLoginForm();
      return;
    }

    try {
  
      const response = await axios.post(
        `http://localhost:3330/comments/${props._id}`,
        { comment: newComment },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
    
      alert('Comment submitted successfully!');
      fetchComments();
      setNewComment('');
      
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false); 
  const toggleLoginForm = () => {
    setIsLoginFormOpen(!isLoginFormOpen);
  };
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


  return (
     
    <div className="modal-container">
      <div className="blog-container">
        <div className="modol-closing" onClick={handleClose}>
          <FaRegWindowClose />
        </div>
        <img className="signle-blog-main-img" src={image} frameBorder="0" allowFullScreen />
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="button-group">
          <button className="blog-button views">
          views  <AiOutlineEye />:{views}
          </button>
          <button className="blog-button likes flex gap-2 " onClick={handleliking} disabled={liked}>
          {liked ? <FiThumbsUp /> : <FiThumbsUp />} Likes: {likes}
          </button>
          <button className="blog-button dislikes flex gap-2" onClick={handleDislike} disabled={liked}>
          <FiThumbsDown /> Dislikes: {dislikes}
          </button>
        </div>
        <div id="comments">
        <h2 className="text-2xl font-bold mb-4">
                    <span className="mr-2">{comments.length}</span>Comments
                </h2>
          <textarea
            id="comment-input"
            rows="4"
            cols="50"
            placeholder="Add a comment"
            value={newComment}
            onChange={handleCommentChange}
          />
          <div className="button-group">
            <button className="comment comment-button" onClick={handleCommentSubmit}>
              Comment
            </button>
            <button className="comment cancel-button" onClick={handleClose}>
              Cancel
            </button>
          </div>
          <div className="comments">
            {comments.map((comment) => (
              <div className="single-user-comment border border-blue-500" key={comment._id}>
            
                {/* Render each comment */}
                <div className="single-user-comment-content  ">
               <div className='flex '>
                  {mapingusersandcomments(comment)}
                  <div>

                  <div className="single-user-comment-userName">
                    <strong>{comment.username}:</strong>
                  </div>
                  <div className="single-user-comment-message">{comment.comment}</div>
                  </div>
                </div>
                  <div className="button-group">
                    <button className="single-comment-like-dislike">Likes: 0</button>
                    <button className="single-comment-like-dislike">Dislikes: 0</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isLoginFormOpen && <LoginForm className='absolute top-20px'/>}
    </div>
  );
}

export default BlogModalContent;
