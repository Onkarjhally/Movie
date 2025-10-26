import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [query, setQuery] = useState("");
  const [movie, setMovie] = useState(null);

  const handleSearch = () => {
    if (!query) return;
    axios
      .get(`https://www.omdbapi.com/?t=${query}&apikey=e8dba859`)
      .then((res) => {
        setMovie(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="Home">
      <div className="input-group">
        <input
          type="text"
          className="text-white"
          placeholder="Search for movie"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="movie-grid">
        {movie && (
          <div className="movie-card">
            <div className="card-body">
              <div className="poster-img">
                <img
                  src={
                    movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"
                  }
                  alt={movie.Title}
                />
                <div className="overlay"></div>
                {/* <div className="like-btn">❤️</div> */}
              </div>
              <div className="poster-text d-flex justify-content-between">
                <span className="text-warning "> {movie.Title}</span>
                <span className="pe-3 text-info">
                  {" "}
                  IMDB⭐<span className="text-white"> {movie.imdbRating}</span>
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
