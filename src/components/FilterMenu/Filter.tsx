import './filter.css';
import '../../Hooks/useSortMovies'


type FilterProps = {
  activeGenre: string;
  setActiveGenre: (genre: string) => void;
};

export default function Filter({ activeGenre, setActiveGenre }: FilterProps) {
  
  const categories = ['All', 'Action', 'Comedy', 'Animation'];

  const setActiveGenreHandler = ( e: React.MouseEvent<HTMLButtonElement>) => {
    setActiveGenre(e.currentTarget.value);
   
  };

  return (
    <div className="filter-container">
      {categories.map((category: string) => (
        <button
          key={category}
          value={category}
          className={activeGenre === category ? 'active' : ''}
          onClick={setActiveGenreHandler}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
