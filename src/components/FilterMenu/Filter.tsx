import './filter.css';
type FilterProps = {
  activeGenre: string;
  setActiveGenre: (genre: string) => void;
};

export default function Filter({ activeGenre, setActiveGenre }: FilterProps) {
  
  const categories = ['All', 'Action', 'Comedy', 'Animation'];

  const setActiveGenreHandler = (e: any) => {
    setActiveGenre(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="filter-container">
      {categories.map((category: string) => (
        <button
          key={category}
          value={category.toLowerCase()}
          className={activeGenre === category ? 'active' : ''}
          onClick={setActiveGenreHandler}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
