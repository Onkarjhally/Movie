import React, { useEffect, useState } from "react";
import axios from "axios";

const Movies = () => {
  const [query, setQuery] = useState("");
  const [movie, setMovie] = useState([]);

  function FetchData() {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2VmNTU1MTZlMWEyMDk0ZDVhMmI3NmQ2ODFkODY0MiIsIm5iZiI6MTc1NTAwMzA5Ny4wMzUsInN1YiI6IjY4OWIzOGQ5YmZhYjJkN2U1ODVkMTg0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KKJoyA2U6QJvtiGUx5Zd1APQtu0VCwOdv5h1eNmSzxo",
      },
    };

    axios
      .request(options)
      .then((res) => {
        console.log(res.data.results);
        setMovie(res.data.results);
      })
      .catch((err) => console.error(err));
  }
  useEffect(() => {
    FetchData();
  }, []);
  return (
    <div className="Home">
      <div className="movie-grid pt-5">
        {movie.map((m) => (
          <div className="movie-card">
            <div className="card-body">
              <div className="poster-img">
                <img
                  className="img-fluid "
                  src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
                  alt="movie.Title"
                />
                <div className="overlay"></div>
                {/* <div className="like-btn">❤️</div> */}
              </div>
              <div className="poster-text text-warning text-center fs-6">
      {m.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
