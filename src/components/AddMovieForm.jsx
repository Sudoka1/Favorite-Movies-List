// AddMovieForm.js
import  { useState, useContext } from 'react';
import { MovieContext } from './MovieContext';

function AddMovieForm() {
  const [movie, setMovie] = useState('');
  const { addMovie } = useContext(MovieContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (movie.trim()) {
      addMovie({ id: Date.now(), name: movie });
      setMovie('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
        placeholder="Add a new movie"
      />
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default AddMovieForm;
