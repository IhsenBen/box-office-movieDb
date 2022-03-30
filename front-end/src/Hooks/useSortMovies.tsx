const useSortMovies = () => {
  /*
  The genre_ids from the API call contains numbers
  correspending to values that can be obtained from 
  an another API call.
  took these values and stored them on this object instead.
  */
  const mdbGenres: { [key: number]: string } = {
    420: 'All',
    12: 'Adventure',
    14: 'Fantasy',
    16: 'Animation',
    18: 'Drama',
    27: 'Horror',
    28: 'Action',
    35: 'Comedy',
    36: 'History',
    37: 'Western',
    53: 'Thriller',
    80: 'Crime',
    99: 'Documentary',
    878: 'Science Fiction',
    9648: 'Mystery',
    10402: 'Music',
    10749: 'Romance',
    10751: 'Family',
    10752: 'War',
    10770: 'TV Movie',
  };

  const getGenreID = (genre: string) => {
    for (const key in mdbGenres) {
      if (mdbGenres[key] === genre) {
        return parseInt(key);
      }
    }
    return 'please enter a valid genre';
  };

  const getGenreString = (key: number) => {
    return mdbGenres[key];
  };

  const getGenre = (genre: string | number) => {
    if (typeof genre === 'string') {
      return getGenreID(genre);
    } else if (typeof genre === 'number') {
      return getGenreString(genre);
    }
  };

  const filterData = (data: any[], genre: string) => {
    const genreID = getGenre(genre);

    if (genreID === 420 || genreID === 'please enter a valid genre') {
      return data;
    } else {
      const filteredData = data.filter((movie: any) => {
        return movie.genre_ids.includes(genreID);
      });
      return filteredData;
    }
  };

  return { filterData, getGenre };
};

export default useSortMovies;
