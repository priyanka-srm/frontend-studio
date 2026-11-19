
function SearchBar({
  query,
  setQuery,
  loading,
  handleSearch,
  searchAreaRef,
  showRecentSearches,
  setShowRecentSearches,
  recentSearches,
  filteredRecentSearches,
  clearRecentSearches,
  handleRecentSearchClick,
}) {
  return (
    <div className="search-area" ref={searchAreaRef}>
      <form className="search-form" onSubmit={handleSearch}>
        <label className="sr-only" htmlFor="movie-search">
          Search for a movie
        </label>

        <input
          id="movie-search"
          type="search"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setShowRecentSearches(true);
          }}
          onFocus={() => setShowRecentSearches(true)}
          placeholder="Search a movie, e.g. Interstellar or Dragon 2025..."
          autoComplete="off"
          aria-expanded={
            showRecentSearches && filteredRecentSearches.length > 0
          }
          aria-controls="recent-searches-list"
        />

        <button type="submit" disabled={loading}>
          {loading ? "Searching..." : "Search movies"}
        </button>
      </form>

      {showRecentSearches && recentSearches.length > 0 && (
        <div
          className="recent-searches-dropdown"
          id="recent-searches-list"
          aria-label="Recent movie searches"
        >
          <div className="recent-searches-heading">
            <span>
              <span aria-hidden="true">🕘</span> Recent searches
            </span>

            <button
              type="button"
              className="clear-recent-searches"
              onClick={clearRecentSearches}
            >
              Clear all
            </button>
          </div>

          {filteredRecentSearches.length > 0 ? (
            <ul className="recent-searches-list">
              {filteredRecentSearches.map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    className="recent-search-item"
                    onClick={() => handleRecentSearchClick(item)}
                  >
                    <span aria-hidden="true">↺</span>
                    <span>{item}</span>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="recent-searches-empty">
              No matching recent searches.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
