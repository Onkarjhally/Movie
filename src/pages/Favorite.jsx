import React, { useEffect, useState } from "react";
import axios from "axios";

const Favorite = () => {
  return (
    <div className="Home">
      <div className="movie-grid">
    
          <div className="movie-card">
            <div className="card-body">
              <div className="poster-img">
                <img src={"/placeholder.png"} alt="movie.Title" />
                <div className="overlay"></div>
                {/* <div className="like-btn">❤️</div> */}
              </div>
              <div className="poster-text d-flex justify-content-between">
                <span> movie.Title</span>
                <span className="pe-3"> IMDB⭐ movie.imdbRating</span>
              </div>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default Favorite;
