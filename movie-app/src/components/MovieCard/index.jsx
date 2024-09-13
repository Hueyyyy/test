/* eslint-disable react/prop-types */
import "./MovieCard.style.css";

const MovieCard = ({ movie }) => {
  const { id, poster_path, original_title, release_date, vote_average, vote_count, overview } = movie;

  return (
    <a href={`https://www.themoviedb.org/movie/${id}`} target="_blank" className="movie_card">
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} className="movie_poster" alt="" />

      <div className="movie_details">
        <h3 className="movie_details_heading">{original_title}</h3>
        <div className="align_center movie_date_rate">
          <p>{release_date}</p>
          <p>
            {vote_count} - {vote_average} <i className="bx bx-star"></i>
          </p>
        </div>
        <p className="movie_description">{overview.substring(0, 100) + "..."}</p>
      </div>
    </a>
  );
};

export default MovieCard;
