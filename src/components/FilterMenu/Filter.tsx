import React, { useEffect } from 'react';
import './filter.css';

export default function Filter({
  cardMovies,
  setFiltered,
  activeGenre,
  setActiveGenre,
}: any) {
  useEffect(() => {
    if (activeGenre === 'All') {
      setFiltered(cardMovies);
      return;
    }
    const filtered = cardMovies.filter((movie: any) =>
      movie.genre_ids.includes(activeGenre)
    );
    setFiltered(filtered);
  }, [activeGenre]);

  return (
    <div className="filter-container pt-10">
      <button
        className={activeGenre === 'All' ? 'active' : ''}
        onClick={() => setActiveGenre('All')}
      >
        All
      </button>
      <button
        className={activeGenre === 'Action' ? 'active' : ''}
        onClick={() => setActiveGenre('Action')}
      >
        Action
      </button>
      <button
        className={activeGenre === 'Comedy' ? 'active' : ''}
        onClick={() => setActiveGenre('Comedy')}
      >
        Comedy
      </button>
      <button
        className={activeGenre === 'Animation' ? 'active' : ''}
        onClick={() => setActiveGenre('Animation')}
      >
        Animation
      </button>
    </div>
  );
}
