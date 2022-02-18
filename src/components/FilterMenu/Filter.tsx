import { useEffect, useCallback } from 'react';
import './filter.css';

export default function Filter({
  cardMovies,
  setFiltered,
  activeGenre,
  setActiveGenre,
}: any) {


  const categories = ['All', 'Action', 'Comedy', 'Animation']




// need to improve this to avoid re-rendering and build error // maybe useCallback
  useEffect(() => {
    if (activeGenre === 'All') {
      setFiltered(cardMovies);
      return;
    }
    const filtered = cardMovies.filter((movie: any) =>
      movie.genre_ids.includes(activeGenre)
    );
    setFiltered(filtered);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  //^ temporary work around cuz this kept asking for unnecessary dependencies and deployment was failing 
  }, [activeGenre]);

  


  return (
    <div className="filter-container pt-10">
      {categories.map((category: string) => (
        <button
          key={category}
          className={
            activeGenre === category ? 'active' : ''
          }
          onClick={() => {
            if (activeGenre === category) {
              setActiveGenre('All');
            } else {
              setActiveGenre(category);
            }
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
}




