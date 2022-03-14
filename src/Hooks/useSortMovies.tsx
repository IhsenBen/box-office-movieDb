
import { useEffect, useState } from 'react';

import useMDBAPI from './useMDBAPI';

const useSortMovies = () => {
 
  const [filtredMovies, setFiltredMovies] = useState<Array<any>>([]);

  const { mdbData } = useMDBAPI();

  const filterData = (data: any, genre: string) => {
    const generesObject: { [key: string]: number } = {
      action: 28,
      comedy: 35,
      animation: 16,
    };
    // check if genre exist in genresObject keys
    const validGenre = Object.keys(generesObject).includes(genre.toLowerCase());
    //disable typscript errors for this line

    if (validGenre) {
      
      const filteredData = data.filter((movie: any) => {
        // @ts-ignore
        return movie.genre_ids.includes(generesObject[genre.toLowerCase()]);
      });
      
     
      setFiltredMovies(filteredData);
      console.log('filtredMovie', filtredMovies);
      return filteredData;
    
    }
  };

  const actionMovies = filterData(mdbData, 'Action');
  setFiltredMovies(actionMovies);

  console.log('action movies', actionMovies);
  console.log('filtred movies', filtredMovies);

  return { filtredMovies, filterData };
};

export default useSortMovies;
