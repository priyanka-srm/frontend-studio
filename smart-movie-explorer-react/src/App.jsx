import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";
import MovieDetailsModal from "./components/MovieDetailsModal";
import SearchBar from "./components/SearchBar";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const FAVORITES_KEY = "smart-movie-explorer-favorites";
const RECENT_SEARCHES_KEY = "smart-movie-explorer-recent-searches";
const MAX_RECENT_SEARCHES = 6;

function loadFromStorage(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
}

function loadFavorites() {
  const saved = loadFromStorage(FAVORITES_KEY, []);
  return Array.isArray(saved) ? saved : [];
}

function loadRecentSearches() {
  const saved = loadFromStorage(RECENT_SEARCHES_KEY, []);

  return Array.isArray(saved)
    ? saved
        .filter((item) => typeof item === "string" && item.trim().length > 0)
        .slice(0, MAX_RECENT_SEARCHES)
    : [];
}

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const [favorites, setFavorites] = useState(loadFavorites);
  const [recentSearches, setRecentSearches] = useState(loadRecentSearches);
  const [showRecentSearches, setShowRecentSearches] = useState(false);

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movieDetails, setMovieDetails] = useState(null);
  const [detailsLoading, setDetailsLoading] = useState(false);
  const [detailsError, setDetailsError] = useState("");

  const searchControllerRef = useRef(null);
  const detailsControllerRef = useRef(null);
  const closeButtonRef = useRef(null);
  const searchAreaRef = useRef(null);

  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    } catch {
      // Favorites remain available in React state if storage is unavailable.
    }
  }, [favorites]);

  useEffect(() => {
    try {
      localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(recentSearches));
    } catch {
      // Recent searches remain available in React state for this session.
    }
  }, [recentSearches]);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        searchAreaRef.current &&
        !searchAreaRef.current.contains(event.target)
      ) {
        setShowRecentSearches(false);
      }
    }

    document.addEventListener("pointerdown", handleOutsideClick);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, []);

  const closeDetails = useCallback(() => {
    detailsControllerRef.current?.abort();
    detailsControllerRef.current = null;

    setSelectedMovie(null);
    setMovieDetails(null);
    setDetailsError("");
    setDetailsLoading(false);
  }, []);

  useEffect(() => {
    if (!selectedMovie) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        closeDetails();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedMovie, closeDetails]);

  function isFavorite(movieId) {
    return favorites.some((movie) => movie.imdbID === movieId);
  }

  function toggleFavorite(movie) {
    setFavorites((currentFavorites) => {
      const alreadySaved = currentFavorites.some(
        (favorite) => favorite.imdbID === movie.imdbID,
      );

      if (alreadySaved) {
        return currentFavorites.filter(
          (favorite) => favorite.imdbID !== movie.imdbID,
        );
      }

      return [...currentFavorites, movie];
    });
  }

  function rememberSearch(searchTerm) {
    setRecentSearches((currentSearches) =>
      [
        searchTerm,
        ...currentSearches.filter(
          (item) => item.toLowerCase() !== searchTerm.toLowerCase(),
        ),
      ].slice(0, MAX_RECENT_SEARCHES),
    );
  }

  async function handleSearch(event, searchOverride) {
    event?.preventDefault();

    const searchTerm = (searchOverride ?? query).trim();
    setShowRecentSearches(false);

    if (!searchTerm) {
      searchControllerRef.current?.abort();
      setLoading(false);
      setError("Please enter a movie name to search.");
      setMovies([]);
      setHasSearched(true);
      return;
    }

    if (!API_KEY) {
      setError(
        "OMDb API key is missing. Add VITE_OMDB_API_KEY to your .env.local file and restart the development server.",
      );
      setMovies([]);
      setHasSearched(true);
      return;
    }

    const yearMatch = searchTerm.match(/\b(19\d{2}|20\d{2})\b/);
    const year = yearMatch?.[0];
    const title = year
      ? searchTerm.replace(yearMatch[0], "").trim()
      : searchTerm;

    if (!title) {
      setError("Please enter a movie title along with the year.");
      setMovies([]);
      setHasSearched(true);
      return;
    }

    rememberSearch(searchTerm);
    setQuery(searchTerm);

    searchControllerRef.current?.abort();

    const controller = new AbortController();
    searchControllerRef.current = controller;

    setLoading(true);
    setError("");
    setMovies([]);
    setHasSearched(true);

    try {
      const params = new URLSearchParams({
        apikey: API_KEY,
        s: title,
        type: "movie",
      });

      if (year) {
        params.set("y", year);
      }

      const response = await fetch(
        `https://www.omdbapi.com/?${params.toString()}`,
        { signal: controller.signal },
      );

      if (!response.ok) {
        throw new Error(
          "Unable to connect to the movie service. Please try again.",
        );
      }

      const data = await response.json();

      if (data.Response === "False") {
        if (data.Error === "Invalid API key!") {
          throw new Error(
            "The OMDb API key is invalid. Please check your .env.local file.",
          );
        }

        if (data.Error?.toLowerCase().includes("limit")) {
          throw new Error(
            "The OMDb daily request limit may have been reached. Please try again later.",
          );
        }

        setMovies([]);
        setError(
          `No results found for "${searchTerm}" in OMDb. Try the movie's English title or add its release year. Some Tamil movies may not be listed in this database.`,
        );
        return;
      }

      setMovies(Array.isArray(data.Search) ? data.Search : []);
    } catch (err) {
      if (err.name !== "AbortError") {
        setMovies([]);
        setError(err.message || "Something went wrong. Please try again.");
      }
    } finally {
      if (!controller.signal.aborted) {
        setLoading(false);
      }
    }
  }
  function handleRecentSearchClick(searchTerm) {
    setQuery(searchTerm);
    setShowRecentSearches(false);
    handleSearch(null, searchTerm);
  }

  function clearRecentSearches() {
    setRecentSearches([]);
    setShowRecentSearches(false);
  }

  async function handleMovieClick(movie) {
    detailsControllerRef.current?.abort();

    const controller = new AbortController();
    detailsControllerRef.current = controller;

    setSelectedMovie(movie);
    setMovieDetails(null);
    setDetailsError("");
    setDetailsLoading(true);

    if (!API_KEY) {
      setDetailsError(
        "OMDb API key is missing. Configure your .env.local file first.",
      );
      setDetailsLoading(false);
      return;
    }

    try {
      const params = new URLSearchParams({
        apikey: API_KEY,
        i: movie.imdbID,
        plot: "full",
      });

      const response = await fetch(
        `https://www.omdbapi.com/?${params.toString()}`,
        { signal: controller.signal },
      );

      if (!response.ok) {
        throw new Error("Unable to load movie details. Please try again.");
      }

      const data = await response.json();

      if (data.Response === "False") {
        throw new Error(data.Error || "Could not load movie details.");
      }

      setMovieDetails(data);
    } catch (err) {
      if (err.name !== "AbortError") {
        setDetailsError(
          err.message || "Something went wrong while loading movie details.",
        );
      }
    } finally {
      if (!controller.signal.aborted) {
        setDetailsLoading(false);
      }
    }
  }

  function handleBackdropClick(event) {
    if (event.target === event.currentTarget) {
      closeDetails();
    }
  }

  function renderMovieCard(movie) {
    const saved = isFavorite(movie.imdbID);

    return (
      <MovieCard
        key={movie.imdbID}
        movie={movie}
        saved={saved}
        onMovieClick={handleMovieClick}
        onToggleFavorite={toggleFavorite}
      />
    );
  }

  const filteredRecentSearches = recentSearches.filter(
    (item) =>
      !query.trim() || item.toLowerCase().includes(query.trim().toLowerCase()),
  );

  return (
    <div className="app">
      <header className="site-header">
        <a className="brand" href="/" aria-label="Smart Movie Explorer home">
          <span className="brand-icon" aria-hidden="true">
            🎬
          </span>
          <span>Smart Movie Explorer</span>
        </a>

        <span className="header-label">DISCOVER YOUR NEXT MOVIE</span>
      </header>

      <main className="main-content">
        <section className="hero">
          <p className="eyebrow">YOUR PERSONAL MOVIE GUIDE</p>

          <h1>
            Find your next
            <br />
            <span>favorite movie.</span>
          </h1>

          <p className="hero-description">
            Explore movies, discover their stories, and find something worth
            watching.
          </p>
          <SearchBar
            query={query}
            setQuery={setQuery}
            loading={loading}
            handleSearch={handleSearch}
            searchAreaRef={searchAreaRef}
            showRecentSearches={showRecentSearches}
            setShowRecentSearches={setShowRecentSearches}
            recentSearches={recentSearches}
            filteredRecentSearches={filteredRecentSearches}
            clearRecentSearches={clearRecentSearches}
            handleRecentSearchClick={handleRecentSearchClick}
          />

          <p className="search-hint">
            Try a movie title such as Inception, Interstellar, or a title with
            its release year.
          </p>
        </section>

        <section className="results-section" aria-live="polite">
          {loading && (
            <p className="status-message">Finding movies for you...</p>
          )}

          {!loading && error && (
            <div className="status-message error-message" role="alert">
              <p>{error}</p>
            </div>
          )}

          {!loading && !error && hasSearched && movies.length > 0 && (
            <>
              <div className="section-heading">
                <div>
                  <p className="eyebrow">SEARCH RESULTS</p>
                  <h2>Movies you might love</h2>
                </div>

                <span className="result-count">
                  {movies.length} {movies.length === 1 ? "movie" : "movies"}
                </span>
              </div>

              <div className="movie-grid">{movies.map(renderMovieCard)}</div>
            </>
          )}

          {!loading && !error && hasSearched && movies.length === 0 && (
            <div className="empty-state">
              <span className="empty-icon" aria-hidden="true">
                🍿
              </span>
              <h2>No movies to show</h2>
              <p>Try searching for another movie title.</p>
            </div>
          )}

          {!loading && !error && !hasSearched && (
            <div className="empty-state welcome-state">
              <span className="empty-icon" aria-hidden="true">
                ✨
              </span>
              <h2>Your next movie adventure starts here</h2>
              <p>Search for a movie to explore its details.</p>
            </div>
          )}
        </section>
        <section
          className="favorites-section"
          aria-labelledby="favorites-title"
        >
          <p className="eyebrow">YOUR COLLECTION</p>

          <div className="section-heading">
            <div>
              <h2 id="favorites-title">Favorites ❤️</h2>
              <p>Your personally saved movie collection.</p>
            </div>

            <span className="result-count">{favorites.length} saved</span>
          </div>

          {favorites.length > 0 ? (
            <div className="movie-grid">{favorites.map(renderMovieCard)}</div>
          ) : (
            <div className="empty-state favorites-empty-state">
              <span className="empty-icon" aria-hidden="true">
                ♡
              </span>
              <h3>No favorites yet</h3>
              <p>
                Search for movies and select “Add to favorites” to save them
                here.
              </p>
            </div>
          )}
        </section>
      </main>

      <footer className="site-footer">
        <p>Made with curiosity and a love for movies.</p>
        <p>Smart Movie Explorer</p>
      </footer>

      {selectedMovie && (
        <MovieDetailsModal
          movieDetails={movieDetails}
          detailsLoading={detailsLoading}
          detailsError={detailsError}
          closeDetails={closeDetails}
          closeButtonRef={closeButtonRef}
          handleBackdropClick={handleBackdropClick}
          isFavorite={isFavorite}
          toggleFavorite={toggleFavorite}
        />
      )}
    </div>
  );
}

export default App;
