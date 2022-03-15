const useSortMovies = () => {
  const generesObject: { [key: string]: number } = {
    action: 28,
    comedy: 35,
    animation: 16,
  };

  const filterData = (data: any[], genre: string) => {
    // check if genre exist in genresObject keys
    const validGenre = Object.keys(generesObject).includes(genre.toLowerCase());

    if (validGenre) {
      const filteredData = data.filter((movie: any) => {
        return movie.genre_ids.includes(generesObject[genre.toLowerCase()]);
      });
      return filteredData;
    } else {
      return 'Invalid Genre';
    }
  };

  return { filterData };
};

export default useSortMovies;
