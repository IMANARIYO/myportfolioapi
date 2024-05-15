import React from 'react';
import projectImage from '../images/project-3.jpg'; // Import the image

function Portfolio() {
  return (
    <div className="section portfolio" id="portfolio">
      <div className="section-title">
        <span className="subtitle sub-title">Browse our Portfolio</span>
        <h1 className="title sub-title">Explore our Portfolio</h1>
      </div>
      {/* Your content for portfolio section goes here */}
      <div className="portfolio-container">
        <div className="single-project">
          <div className="image">
            <img src={projectImage} alt="Project 3" /> {/* Use imported image */}
          </div>
          <div className="project-presentation">
            <div className="project-upper">
              <span>UI/UX Design</span>
              <div className="min-read">5min-read</div>
            </div>
            <div className="project-lower">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur in dolores optio deserunt
              corporis sit quidem, sunt rerum corrupti nesciunt est facere quaerat minima reprehenderit! Sit
              autem alias sapiente suscipit.
            </div>
          </div>
        </div>   
        <div className="single-project">
          <div className="image">
            <img src={projectImage} alt="Project 3" /> {/* Use imported image */}
          </div>
          <div className="project-presentation">
            <div className="project-upper">
              <span>UI/UX Design</span>
              <div className="min-read">5min-read</div>
            </div>
            <div className="project-lower">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur in dolores optio deserunt
              corporis sit quidem, sunt rerum corrupti nesciunt est facere quaerat minima reprehenderit! Sit
              autem alias sapiente suscipit.
            </div>
          </div>
        </div>
        <div className="single-project">
          <div className="image">
            <img src={projectImage} alt="Project 3" /> {/* Use imported image */}
          </div>
          <div className="project-presentation">
            <div className="project-upper">
              <span>UI/UX Design</span>
              <div className="min-read">5min-read</div>
            </div>
            <div className="project-lower">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur in dolores optio deserunt
              corporis sit quidem, sunt rerum corrupti nesciunt est facere quaerat minima reprehenderit! Sit
              autem alias sapiente suscipit.
            </div>
          </div>
        </div>
     
      </div>
    </div>
  );
}

export default Portfolio;
