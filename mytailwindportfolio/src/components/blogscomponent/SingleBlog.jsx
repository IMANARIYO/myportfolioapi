import React, { useState } from 'react'
import './singleblog.css'
import photo from '../images/project-2.jpg'
const SingleBlogPost = ({blog}) => {
  return (
    <div className='blog-main-content'>
      <div className='blogs-list'>
        <div className='blog-container'>
          <img   className='signle-blog-main-img' src={photo} frameBorder='0' allowFullScreen/>
          <h1> Mobile development</h1>
          <p>
          Mobile development is the process of creating software applications specifically designed to run on mobile devices, such as smartphones and tablets. It encompasses a wide range of tasks, including designing user interfaces, writing code in programming languages tailored to mobile platforms like Swift for iOS or Java for Android, integrating with device features such as cameras and GPS, optimizing performance and battery life, ensuring security, and adhering to app store guidelines for distribution. Developers often face challenges related to device fragmentation, where they must ensure compatibility across various devices with different screen sizes, resolutions, and hardware capabilities. Additionally, mobile development involves continuous learning to keep up with evolving technologies and trends in the fast-paced mobile landscape. It's essential for developers to prioritize user experience, incorporating user feedback, testing thoroughly, and providing updates and maintenance to deliver high-quality mobile applications that meet the needs and expectations of users.
          </p>
          <div className='button-group'>
            <button className="blog-button views">Views: 1,000</button>
            <button className="blog-button likes ">Likes: 100</button>
            <button className="blog-button dislikes">Dislikes: 10</button>
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
              <div className='single-user-comment'>
                  <img
                  className='single-user-profile-img'
                  src={photo}
                  alt='User Profile'
                />
                <div className='single-user-comment-content'>

                 <div className="single-user-comment-userName"><strong>User123:</strong></div>
                 <div className="single-user-comment-message">Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.</div>  
                  <div className='button-group'>
                    <button className='single-comment-like-dislke'>Likes: 100</button>
                    <button className='single-comment-like-dislke'>Dislikes: 10</button>
                  </div>
                </div>
              </div>
              <div className='single-user-comment'>
                  <img
                  className='single-user-profile-img'
                  src={photo}
                  alt='User Profile'
                />
                <div className='single-user-comment-content'>

                 <div className="single-user-comment-userName"><strong>User123:</strong></div>
                 <div className="single-user-comment-message">Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.</div>  
                  <div className='button-group'>
                    <button className='single-comment-like-dislke'>Likes: 100</button>
                    <button className='single-comment-like-dislke'>Dislikes: 10</button>
                  </div>
                </div>
              </div>
              <div className='single-user-comment'>
                  <img
                  className='single-user-profile-img'
                  src={photo}
                  alt='User Profile'
                />
                <div className='single-user-comment-content'>

                 <div className="single-user-comment-userName"><strong>User123:</strong></div>
                 <div className="single-user-comment-message">Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.</div>  
                  <div className='button-group'>
                    <button className='single-comment-like-dislke'>Likes: 100</button>
                    <button className='single-comment-like-dislke'>Dislikes: 10</button>
                  </div>
                </div>
              </div>
              <div className='single-user-comment'>
                  <img
                  className='single-user-profile-img'
                  src={photo}
                  alt='User Profile'
                />
                <div className='single-user-comment-content'>

                 <div className="single-user-comment-userName"><strong>User123:</strong></div>
                 <div className="single-user-comment-message">Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.</div>  
                  <div className='button-group'>
                    <button className='single-comment-like-dislke'>Likes: 100</button>
                    <button className='single-comment-like-dislke'>Dislikes: 10</button>
                  </div>
                </div>
              </div>
              <div className='single-user-comment'>
                  <img
                  className='single-user-profile-img'
                  src={photo}
                  alt='User Profile'
                />
                <div className='single-user-comment-content'>

                 <div className="single-user-comment-userName"><strong>User123:</strong></div>
                 <div className="single-user-comment-message">Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.</div>  
                  <div className='button-group'>
                    <button className='single-comment-like-dislke'>Likes: 100</button>
                    <button className='single-comment-like-dislke'>Dislikes: 10</button>
                  </div>
                </div>
              </div>
              <div className='single-user-comment'>
                  <img
                  className='single-user-profile-img'
                  src={photo}
                  alt='User Profile'
                />
                <div className='single-user-comment-content'>
                 <div className="single-user-comment-userName"><strong>User123:</strong></div>
                 <div className="single-user-comment-message">Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.</div>  
                  <div className='button-group'>
                    <button className='single-comment-like-dislke'>Likes: 100</button>
                    <button className='single-comment-like-dislke'>Dislikes: 10</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>










        <div className='blog-container'>
          <img src='../images/project-2.jpg' frameBorder='0' allowFullScreen/>
          <h1>Title of the blo</h1>
          <p>
            Description of the blo goes here. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nullam suscipit fringilla enim, non
            varius orci condimentum eu.
          </p>
          <p>Views: 1,000 | Likes: 100 | Dislikes: 10</p>
          <h2>Comments</h2>
          <div id='comments'>
            <div className='comment'>
              <img
                className='user-profile-img'
                src='../images/project-2.jpg'
                alt='User Profile'
              />
              <div className='comment-content'>
                <strong>User123:</strong> Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
                <span className='comment-likes'>Likes: 20</span>
                <span className='comment-dislikes'>Dislikes: 5</span>
              </div>
            </div>
          </div>
          <textarea
            id='comment-input'
            rows='4'
            cols='50'
            placeholder='Add a comment'
          />
          <button >Comment</button>
        </div>
        <div className='blog-container'>
          <img src='../images/project-2.jpg' frameBorder='0' allowFullScreen/>
          <h1>Title of the blo</h1>
          <p>
            Description of the blo goes here. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nullam suscipit fringilla enim, non
            varius orci condimentum eu.
          </p>
          <p>Views: 1,000 | Likes: 100 | Dislikes: 10</p>
          <h2>Comments</h2>
          <div id='comments-container' className='comments'>
            <div className='comment'>
              <img
                className='user-profile-img'
                src='../images/project-2.jpg'
                alt='User Profile'
              />
              <div className='comment-content'>
                <strong>User123:</strong> Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
                <span className='comment-likes'>Likes: 20</span>
                <span className='comment-dislikes'>Dislikes: 5</span>
              </div>
            </div>
          </div>
          <textarea
            id='comment-input'
            rows='4'
            cols='50'
            placeholder='Add a comment'
          />
          <button >Comment</button>
        </div>
      </div>
      <div className='related-blog'>
        <h2>Related blog</h2>

        <div className='related-blog-item'>
          <img
            className='related-blog-thumbnail'
            src={photo}
            alt='Related blog Thumbnail'
          />
          <div className='small-show'>
            <h3>Related blog 1</h3>
            <p>Description of the blo goes here. </p>
          </div>
        </div>
        <div className='related-blog-item'>
          <img
            className='related-blog-thumbnail'
            src='../images/project-2.jpg'
            alt='Related blog Thumbnail'
          />
          <h3>Related blo 2</h3>
        </div>
        <div className='related-blog-item'>
          <img
            className='related-blog-thumbnail'
            src='../images/project-2.jpg'
            alt='Related blog Thumbnail'
          />
          <h3>Related blo 3</h3>
        </div>
        <div className='related-blog-item'>
          <img
            className='related-blog-thumbnail'
            src='../images/project-2.jpg'
            alt='Related blog Thumbnail'
          />
          <h3>Related blo 3</h3>
        </div>
        <div className='related-blog-item'>
          <img
            className='related-blog-thumbnail'
            src='../images/project-2.jpg'
            alt='Related blog Thumbnail'
          />
          <h3>Related blo 3</h3>
        </div>
        <div className='related-blog-item'>
          <img
            className='related-blog-thumbnail'
            src='../images/project-2.jpg'
            alt='Related blog Thumbnail'
          />
          <h3>Related blo 3</h3>
        </div>
        <div className='related-blog-item'>
          <img
            className='related-blog-thumbnail'
            src='../images/project-2.jpg'
            alt='Related blog Thumbnail'
          />
          <h3>Related blo 3</h3>
        </div>
        <div className='related-blog-item'>
          <img
            className='related-blog-thumbnail'
            src='../images/project-2.jpg'
            alt='Related blog Thumbnail'
          />
          <h3>Related blo 3</h3>
        </div>
        <div className='related-blog-item'>
          <img
            className='related-blog-thumbnail'
            src='../images/project-2.jpg'
            alt='Related blog Thumbnail'
          />
          <h3>Related blo 3</h3>
        </div>
        <div className='related-blog-item'>
          <img
            className='related-blog-thumbnail'
            src='../images/project-2.jpg'
            alt='Related blog Thumbnail'
          />
          <h3>Related blo 3</h3>
        </div>
        <div className='related-blog-item'>
          <img
            className='related-blog-thumbnail'
            src='../images/project-2.jpg'
            alt='Related blog Thumbnail'
          />
          <h3>Related blo 3</h3>
        </div>
        <div className='related-blog-item'>
          <img
            className='related-blog-thumbnail'
            src='../images/project-2.jpg'
            alt='Related blog Thumbnail'
          />
          <h3>Related blo 3</h3>
        </div>
        <div className='related-blog-item'>
          <img
            className='related-blog-thumbnail'
            src='../images/project-2.jpg'
            alt='Related blog Thumbnail'
          />
          <h3>Related blo 3</h3>
        </div>
        <div className='related-blog-item'>
          <img
            className='related-blog-thumbnail'
            src='../images/project-2.jpg'
            alt='Related blog Thumbnail'
          />
          <h3>Related blo 3</h3>
        </div>
      </div>
    </div>
  )
}

export default SingleBlogPost
