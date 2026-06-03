import { useContext, useState } from "react";
import { SearchContext } from "../context/SearchContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faRightLong} from '@fortawesome/free-solid-svg-icons'
import Landing from "../components/Landing";
import notfound__img from '../assets/undraw_online-video_ecqg.svg'
import { Link } from "react-router-dom";

const Search = () => {
  const { movies, loading, sortMovies, query } = useContext(SearchContext);
  const [filter, setFilter] = useState("Sort");

  function handleFilterChange(e) {
    const value = e.target.value;
    setFilter(value);
    sortMovies(value);
  }

  return (
    <>
      <Landing />
      <div className="container">
        <div className="row">
          <div className="movies__page">
            <h2 className="results">Results for: {query}</h2>

            <select id="filter" value={filter} onChange={handleFilterChange}>
              <option value="Sort">Sort</option>
              <option value="Title">Title</option>
              <option value="Year">Year</option>
              <option value="Type">Type</option>
            </select>

            {loading && <div className="loading__page">
                  <div className="loading__bar"></div>
                  <FontAwesomeIcon icon={faSpinner} className="fa-spinner"/>
              </div>}

            {!loading && movies.length === 0 && (
              <div className="notfound">
                <p className='notfound__text'>No Movies Found</p>
                <img className="notfound__img" src={notfound__img}/>
              </div>
            )}

            {!loading && movies.length > 0 && (
              <div className="movie-list">
                {movies.map((movie) => (
                  <div className="movie-card" key={movie.imdbID}>
                    <Link to={`/movie/${movie.imdbID}`} className="movie-card__container click">
                      <div className="learnmore-overlay">
                        Learn More 
                        <FontAwesomeIcon icon={faRightLong} className="fa-right-long"/>
                      </div>

                      <img 
                        src={movie.Poster} 
                        alt={movie.Title}
                        onError={(e) => e.target.classList.add("no-image")} 
                      />

                      <h3 className="movie__title">{movie.Title}</h3>
                      <p><b>Year:</b> {movie.Year}</p>
                      <p><b>imdbID:</b> {movie.imdbID}</p>
                      <p><b>Type:</b> {movie.Type}</p>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
