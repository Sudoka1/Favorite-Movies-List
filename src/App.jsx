// App.js
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { MovieProvider } from './components/MovieContext';
import MovieList from './components/MovieList';
import SearchMovieForm from './components/SearchMovieForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faGhost, faBolt, faTheaterMasks, faHistory } from '@fortawesome/free-solid-svg-icons';
import './index.css';

function App() {
  return (
    <MovieProvider>
      <Router>
        <div className="container">
          <header>
            <h1>Chose Your Movie</h1>
            <nav>
              <NavLink to="/" exact activeClassName="active">
                <FontAwesomeIcon icon={faHome} /> Home
              </NavLink>
              <NavLink to="/horror" activeClassName="active">
                <FontAwesomeIcon icon={faGhost} /> Horror
              </NavLink>
              <NavLink to="/action" activeClassName="active">
                <FontAwesomeIcon icon={faBolt} /> Action
              </NavLink>
              <NavLink to="/drama" activeClassName="active">
                <FontAwesomeIcon icon={faTheaterMasks} /> Drama
              </NavLink>
              <NavLink to="/history" activeClassName="active">
                <FontAwesomeIcon icon={faHistory} /> History
              </NavLink>
            </nav>
            <SearchMovieForm />
          </header>
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/horror" element={<MovieList genre="27" />} />
            <Route path="/action" element={<MovieList genre="28" />} />
            <Route path="/drama" element={<MovieList genre="18" />} />
            <Route path="/history" element={<MovieList genre="36" />} />
          </Routes>
        </div>
      </Router>
    </MovieProvider>
  );
}

export default App;
