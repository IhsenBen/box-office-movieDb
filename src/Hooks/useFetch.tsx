import { useEffect, useState } from 'react';
import axios from 'axios';

// import API form .env.local to hide API_KEY
const API_KEY: string = process.env.REACT_APP_MOVIES_API_KEY as string;

const useFetch = () => {
  const [state, setState] = useState<any>({
    isLoading: true,
    isError: false,
    errorMsg:[],
    data: [],
    genres: [],
   
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const genres = await axios(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
        );

        const pageOne = await axios(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&sort_by=popularity.desc&language=en-US&page=1`
        );
        const pageTwo = await axios(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&sort_by=popularity.desc&language=en-US&page=2`
        );
        //spread operator pour rassembler les 30(40) premiers films de la page 1 et de la page 2

        setState({
          isLoading: false,
          isError: false,
          data: [...pageOne.data.results, ...pageTwo.data.results],
          genres: [...genres.data.genres],
        });
      } catch (error: any) {
        setState({
          isLoading: false,
          isError: true,
          errorMsg: error.message,
          data: [],
          genres: [],
          
        });
      }
    };
    fetchData();
  }, []);

  // fonction que j'exporte pour rest l'erreur avec l'objet
  const handleClear = () => {
    setState({
      isLoading: false,
      isError: false,
    });
  };

  return { state, handleClear };
};
export default useFetch;
