import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Movie = () => {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMovie() {
      setLoading(true);

      const url = `https://www.omdbapi.com/?apikey=1fca216&i=${imdbID}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        setMovie(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    }

    fetchMovie();
  }, [imdbID]);

  if (loading) {
    return (
      <div className="movie-loading">
        <div className="loading__bar"></div>
        <p>Loading movie...</p>
      </div>
    );
  }

  if (!movie) {
    return <p>Movie not found.</p>;
  }

  return (
    <>
        <div className="container">
            <div className="row">
                <div className="grey-bar"></div>
                <div className="movie-page container">
                    <div className="movie-back click" onClick={() => navigate(-1)}>
                        <FontAwesomeIcon icon={faArrowLeft} className="back-icon" />
                        <span>Back</span>
                    </div>
                    <div className="movie-header">
                        <div className="movie__left">
                            <img
                            src={movie.Poster}
                            alt={movie.Title}
                            onError={(e) => e.target.classList.add("no-image")}
                            />

                            <div className="movie-ratings">
                                <h2>Ratings</h2>
                                {movie.Ratings && movie.Ratings.length > 0 ? (
                                movie.Ratings.map((rating, index) => (
                                    <p key={index}>
                                    <b>{rating.Source}:</b> {rating.Value}
                                    </p>
                                ))
                                ) : (
                                <p>No ratings available.</p>
                                )}
                            </div>
                        </div>

                        <div className="movie-info">
                            <h1>{movie.Title}</h1>
                            <p><b>Year:</b> {movie.Year}</p>
                            <p><b>Rated:</b> {movie.Rated}</p>
                            <p><b>Released:</b> {movie.Released}</p>
                            <p><b>Runtime:</b> {movie.Runtime}</p>
                            <p><b>Genre:</b> {movie.Genre}</p>
                            <p><b>Director:</b> {movie.Director}</p>
                            <p><b>Writer:</b> {movie.Writer}</p>
                            <p><b>Actors:</b> {movie.Actors}</p>
                            <p><b>Plot:</b> {movie.Plot}</p>
                            <p><b>Language:</b> {movie.Language}</p>
                            <p><b>Country:</b> {movie.Country}</p>
                            <p><b>Awards:</b> {movie.Awards}</p>
                            <p><b>Metascore:</b> {movie.Metascore}</p>
                            <p><b>IMDb Rating:</b> {movie.imdbRating}</p>
                            <p><b>IMDb Votes:</b> {movie.imdbVotes}</p>
                            <p><b>Box Office:</b> {movie.BoxOffice}</p>
                            <p><b>Type:</b> {movie.Type}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Movie;