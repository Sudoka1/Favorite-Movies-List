// MovieList.js
import { useContext, useEffect } from 'react';
import { MovieContext } from './MovieContext';
import { useLocation } from 'react-router-dom';

function MovieList({ genre }) {
  const { movies, fetchMoviesByGenre, getPosterUrl } = useContext(MovieContext);
  const location = useLocation();

  useEffect(() => {
    if (genre) {
      fetchMoviesByGenre(genre);
    }
  }, [genre, fetchMoviesByGenre]);

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <div key={movie.id} className="movie">
          <img src={getPosterUrl(movie.poster_path)} alt={movie.title} />
          <h3>{movie.title}</h3>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p>{movie.overview}</p> {/* Displaying the mini story/overview */}
        </div>
      ))}
    </div>
  );
}

export default MovieList;
