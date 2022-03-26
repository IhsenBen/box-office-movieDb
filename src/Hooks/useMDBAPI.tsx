import { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY: string = process.env.REACT_APP_MOVIES_API_KEY as string;

const useMDBAPI = () => {
  const [popMovies, setPopMovies] = useState<any>({
    isLoading: true,
    isError: false,
    errorMsg: [],
    data: [],
  });

  // const [topRatedMovies, setTopRatedMovies] = useState<any>({
  //   isLoading: true,
  //   isError: false,
  //   errorMsg: [],
  //   data: [],
  // });

  const API_LINK_POPULAR = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&sort_by=popularity.desc&language=en-US&page=`;
  // const API_LINK_TOP_RATED = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=`;

  

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const [pageOne, Pagetwo] = await Promise.all([
          axios.get(`${API_LINK_POPULAR}1`),
          axios.get(`${API_LINK_POPULAR}2`),
        ]);
        const data = [...Pagetwo.data.results, ...pageOne.data.results];
        setPopMovies({
          isLoading: false,
          isError: false,
          errorMsg: [],
          data,
        });
      } catch (error: any) {
        setPopMovies({
          isLoading: false,
          isError: true,
          errorMsg: [error.message],
          data: [],
        });
      }
    };
    
    // const fetchTopRatedMovies = async () => {
    //   try {
    //     const [pageOne, Pagetwo] = await Promise.all([
    //       axios.get(`${API_LINK_TOP_RATED}1`),
    //       axios.get(`${API_LINK_TOP_RATED}2`),
    //     ]);
    //     const data = [...Pagetwo.data.results, ...pageOne.data.results];
    //     setTopRatedMovies({
    //       isLoading: false,
    //       isError: false,
    //       errorMsg: [],
    //       data,
    //     });
    //   } catch (error: any) {
    //     setTopRatedMovies({
    //       isLoading: false,
    //       isError: true,
    //       errorMsg: [error.message],
    //       data: [],
    //     });
    //   }
      
    // };
    fetchPopularMovies();
    // fetchTopRatedMovies();
  });



        

  const handleClearError = () => {
    setPopMovies({
      ...popMovies,
      isError: false,
      errorMsg: [],
    });

  };

  return { popMovies, handleClearError };
};
export default useMDBAPI;
