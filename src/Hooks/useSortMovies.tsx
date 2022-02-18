import { useEffect, useState } from 'react';

import useFetch from './useAPI';

const useSortMovies = () => {
  // To get the api call and the function that clear the Modal
  const { state } = useFetch();
  // To modify data from api
  const [movies, SetMovies] = useState<any>([]);
  // Getting the states from the api/useFetch
  const { data, genres } = state;

  //Make a new object by replacing genre_ids from data with genres names from genres
  // exp :data.genre_ids = [12,28,16] + genres = [{id:12,name:'Action'},{id:28,name:'Drama'},{id:16,name:'Comedy'}] = data.genre_ids = ['Action','Drama','Comedy']
  useEffect(() => {
    const handledMovies = data.map((movie: any) => {
      const newMovie: any = movie;
      newMovie.genre_ids = movie.genre_ids.map((id: number) => {
        const genre: any = genres.find((genre: any) => genre.id === id);
        const nameCategory: string = genre.name;
        return nameCategory;
      });
      return newMovie;
    });
    SetMovies(handledMovies);
  }, [data, genres]);

  // Sort the movies by descending order of vote
  const topRatedMovies = movies.sort(
    (a: any, b: any) => b.vote_average - a.vote_average
  );
  // Slice 10 movies from topRatedMovies for the slider
  const sliderMovies = topRatedMovies
    .filter((movie: any) => movie.vote_average >= 7)
    .slice(0, 10);
  // Slice the Rest of topRatedMovies for the cards
  const cardMovies = topRatedMovies
    .filter((movie: any) => !sliderMovies.includes(movie))
    .sort((a: any, b: any) => b.vote_average - a.vote_average);
  return { sliderMovies, cardMovies };
};

export default useSortMovies;
