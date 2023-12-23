import React from "react";
import "./CardMovie.css";
import { Link } from "react-router-dom";
export default function CardMovie({ mov }) {
  return (
    <div className="container">
      <Link to={`/movie/${mov.id}`}>
        <div className="card">
          <img
            className="card_image"
            src={`https://image.tmdb.org/t/p/w500/` + mov.poster_path}
            alt=""
          />
          <div className="card_overlay">
            <div className="overlay_Text">
              <p>اسم الفيلم:{mov.title}</p>
              <p>تاريخ الاصدار:{mov.release_date}</p>
              <p>عدد المقيمين: {mov.vote_count}</p>
              <p>التقييم:{mov.vote_average}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
