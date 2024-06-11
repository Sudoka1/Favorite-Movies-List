// SearchMovieForm.js
import  { useState, useContext } from 'react';
import { MovieContext } from './MovieContext';

function SearchMovieForm() {
  const [query, setQuery] = useState('');
  const { searchMovies } = useContext(MovieContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchMovies(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchMovieForm;
