
import MoviePoster from "./MoviePoster";

function MovieCard({
  movie,
  saved,
  onMovieClick,
  onToggleFavorite,
}) {
  return (
    <article className="movie-card-wrapper">
      <button
        className="movie-card movie-card-button"
        type="button"
        onClick={() => onMovieClick(movie)}
        aria-label={`View details for ${movie.Title}`}
      >
        <MoviePoster
          src={movie.Poster}
          title={movie.Title}
        />

        <div className="movie-info">
          <h3>{movie.Title}</h3>
          <p>{movie.Year || "Year unavailable"}</p>
          <span className="movie-card-link">
            View details →
          </span>
        </div>
      </button>

      <button
        className={`favorite-button${saved ? " is-favorite" : ""}`}
        type="button"
        onClick={() => onToggleFavorite(movie)}
        aria-pressed={saved}
        aria-label={
          saved
            ? `Remove ${movie.Title} from favorites`
            : `Add ${movie.Title} to favorites`
        }
      >
        <span aria-hidden="true">{saved ? "♥" : "♡"}</span>
        {saved ? "Remove favorite" : "Add to favorites"}
      </button>
    </article>
  );
}

export default MovieCard;
