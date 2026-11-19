
import MoviePoster from "./MoviePoster";

function MovieDetailsModal({
  movieDetails,
  detailsLoading,
  detailsError,
  closeDetails,
  closeButtonRef,
  handleBackdropClick,
  isFavorite,
  toggleFavorite,
}) {
  return (
    <div
      className="modal-backdrop"
      onMouseDown={handleBackdropClick}
      role="presentation"
    >
      <section
        className="movie-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby={movieDetails ? "modal-description" : undefined}
      >
        <button
          className="modal-close"
          type="button"
          onClick={closeDetails}
          ref={closeButtonRef}
          aria-label="Close movie details"
        >
          ×
        </button>

        {detailsLoading && (
          <div className="modal-status">
            <p>Loading movie details...</p>
          </div>
        )}

        {!detailsLoading && detailsError && (
          <div className="modal-status error-message" role="alert">
            <h2 id="modal-title">Unable to load details</h2>
            <p>{detailsError}</p>
            <button type="button" onClick={closeDetails}>
              Close
            </button>
          </div>
        )}

        {!detailsLoading && movieDetails && (
          <div className="modal-content">
            <div className="modal-poster-container">
              <MoviePoster
                src={movieDetails.Poster}
                title={movieDetails.Title}
                className="modal-poster"
              />
            </div>

            <div className="modal-details">
              <p className="eyebrow">MOVIE DETAILS</p>
              <h2 id="modal-title">{movieDetails.Title}</h2>

              <div className="modal-meta">
                {movieDetails.Year && <span>{movieDetails.Year}</span>}
                {movieDetails.Rated && movieDetails.Rated !== "N/A" && (
                  <span>{movieDetails.Rated}</span>
                )}
                {movieDetails.Runtime && movieDetails.Runtime !== "N/A" && (
                  <span>{movieDetails.Runtime}</span>
                )}
              </div>

              {movieDetails.imdbRating &&
                movieDetails.imdbRating !== "N/A" && (
                  <p className="imdb-rating">
                    ⭐ IMDb {movieDetails.imdbRating}/10
                  </p>
                )}

              <h3>Story</h3>
              <p id="modal-description" className="modal-plot">
                {movieDetails.Plot && movieDetails.Plot !== "N/A"
                  ? movieDetails.Plot
                  : "No plot description is available."}
              </p>

              <div className="detail-list">
                {movieDetails.Genre && movieDetails.Genre !== "N/A" && (
                  <p>
                    <strong>Genre:</strong> {movieDetails.Genre}
                  </p>
                )}

                {movieDetails.Director && movieDetails.Director !== "N/A" && (
                  <p>
                    <strong>Director:</strong> {movieDetails.Director}
                  </p>
                )}

                {movieDetails.Actors && movieDetails.Actors !== "N/A" && (
                  <p>
                    <strong>Cast:</strong> {movieDetails.Actors}
                  </p>
                )}
              </div>

              {movieDetails.imdbID && (
                <a
                  className="imdb-link"
                  href={`https://www.imdb.com/title/${encodeURIComponent(
                    movieDetails.imdbID,
                  )}/`}
                  target="_blank"
                  rel="noreferrer"
                >
                  View on IMDb ↗
                </a>
              )}

              <button
                className={`favorite-button modal-favorite-button${
                  isFavorite(movieDetails.imdbID) ? " is-favorite" : ""
                }`}
                type="button"
                onClick={() => toggleFavorite(movieDetails)}
                aria-pressed={isFavorite(movieDetails.imdbID)}
              >
                <span aria-hidden="true">
                  {isFavorite(movieDetails.imdbID) ? "♥" : "♡"}
                </span>
                {isFavorite(movieDetails.imdbID)
                  ? "Remove from favorites"
                  : "Add to favorites"}
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default MovieDetailsModal;
