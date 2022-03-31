import axios from 'axios';
import { useEffect, useState } from 'react';

const API_KEY: string = process.env.REACT_APP_MOVIES_API_KEY as string;

const useMDBAPI = () => {
  const [topRatedMovies, setTopRatedMovies] = useState<any>({
    isLoading: true,
    isError: false,
    errorMsg: [],
    data: [],
  });

  const API_LINK_TOP_RATED = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=`;

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const [pageOne, Pagetwo] = await Promise.all([
          axios.get(`${API_LINK_TOP_RATED}1`),
          axios.get(`${API_LINK_TOP_RATED}2`),
        ]);
        const data = [...Pagetwo.data.results, ...pageOne.data.results];
        setTopRatedMovies({
          isLoading: false,
          isError: false,
          errorMsg: [],
          data,
        });
      } catch (error: any) {
        setTopRatedMovies({
          isLoading: false,
          isError: true,
          errorMsg: [error.message],
          data: [],
        });
      }
    };

    fetchTopRatedMovies();
  },[API_LINK_TOP_RATED]);

  const handleClearError = () => {
    topRatedMovies({
      isLoading: false,
      isError: false,
      errorMsg: [],
    });
  };

  return { topRatedMovies, handleClearError };
};
export default useMDBAPI;
