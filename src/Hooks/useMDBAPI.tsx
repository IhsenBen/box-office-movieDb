import { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY: string = process.env.REACT_APP_MOVIES_API_KEY as string;

const useMDBAPI = () => {
  const [mdbData, setMDBdata] = useState<any>({
    isLoading: true,
    isError: false,
    errorMsg: [],
    data: [],
  });

  const API_LINK = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&sort_by=popularity.desc&language=en-US&page=`;

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const [pageOne, Pagetwo] = await Promise.all([
          axios.get(`${API_LINK}1`),
          axios.get(`${API_LINK}2`),
        ]);
        const data = [...Pagetwo.data.results, ...pageOne.data.results];
        setMDBdata({
          isLoading: false,
          isError: false,
          errorMsg: [],
          data,
        });
      } catch (error: any) {
        setMDBdata({
          isLoading: false,
          isError: true,
          errorMsg: [error.message],
          data: [],
        });
      }
    };
    fetchPopularMovies();
  }, []);

  const handleClearError = () => {
    setMDBdata({
      ...mdbData,
      isError: false,
      errorMsg: [],
    });
  };

  return { mdbData, handleClearError };
};
export default useMDBAPI;
