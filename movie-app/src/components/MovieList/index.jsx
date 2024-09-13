import { useEffect } from "react";
import MovieCard from "../MovieCard";
import "./MovieList.style.css";
import { useState } from "react";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    dataMovie();
  }, []);

  const dataMovie = async () => {
    const res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=7ce6ca284d7fd7d7192fe0b150e978a7");
    const data = await res.json();
    setMovies(data.results);
  };

  return (
    <section className="movie_list">
      <header className="align_center movie_list_header">
        <h2 className="align_center movie_list_heading">
          Popular <i className="bx bx-upvote"></i>
        </h2>

        <div className="align_center movie_list_fs">
          <ul className="align_center movie_filter">
            <li className="movie_filter_item active">8+ star</li>
            <li className="movie_filter_item">6+ star</li>
            <li className="movie_filter_item">5+ star</li>
          </ul>

          <select className="movie_sorting" name="" id="">
            <option value="">Sort by</option>
            <option value="">Date</option>
            <option value="">Rating</option>
          </select>
          <select className="movie_sorting" name="" id="">
            <option value="">Ascending</option>
            <option value="">Descending</option>
          </select>
        </div>
      </header>

      <div className="movie_cards">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
