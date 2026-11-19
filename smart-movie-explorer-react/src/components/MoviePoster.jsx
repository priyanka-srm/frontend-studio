
import { useState } from "react";

function MoviePoster({ src, title, className = "movie-poster" }) {
  const [failedSrc, setFailedSrc] = useState("");
  const isModalPoster = className === "modal-poster";

  if (!src || src === "N/A" || failedSrc === src) {
    return (
      <div
        className={
          isModalPoster
            ? "poster-placeholder modal-poster"
            : "poster-placeholder"
        }
        role="img"
        aria-label={`Poster unavailable for ${title}`}
      >
        <span aria-hidden="true">🎞️</span>
        <span>Poster unavailable</span>
      </div>
    );
  }

  return (
    <img
      className={className}
      src={src}
      alt={`${title} poster`}
      loading="lazy"
      onError={() => setFailedSrc(src)}
    />
  );
}

export default MoviePoster;
