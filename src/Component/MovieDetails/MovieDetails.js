import React, { useState, useEffect } from "react";
import "./MovieDetails.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function MovieDetails() {
  const param = useParams();
  const [movie, setMovie] = useState([]);
  //get movie by details
  //get  movie by details
  const getMovieDetails = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${param.id}?api_key=52ef927bbeb21980cd91386a29403c78&language=ar`
    );
    setMovie(res.data);
  };
  useEffect(() => {
    getMovieDetails();
  }, []);
  return (
    <div className="container" >
      <div className="movie-img">
        <img
          src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
          alt=""
        />
      </div>
      <div className="movie-details">
        <p>اسم الفيلم:{movie.title}</p>
        <p>تاريخ الفيلم:{movie.release_date}</p>
        <p>عدد المقيمين:{movie.vote_count}</p>
        <p>التقييم:{movie.vote_average}</p>
      </div>
      <div className="movie-story">
        <h1>القصه:</h1>
        <h3>{movie.overview}</h3>
      </div>
      <div className="movie-buttons">
        <Link to="/">
          <button>عوده للرئيسيه</button>
        </Link>
        <a href={movie.homepage}>
          <button>مشاهده الفيلم</button>
        </a>
      </div>
    </div>
  );
}
