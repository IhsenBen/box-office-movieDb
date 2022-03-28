import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import { useEffect, useState } from 'react';
import Cards from '../components/Cards/Cards';
import Filter from '../components/FilterMenu/Filter';
import usePopMovies from '../Hooks/usePopMovies';
import useSortMovies from '../Hooks/useSortMovies';

function PopMovies() {
  const [activeGenre, setActiveGenre] = useState<string>('All');
  const [movies, setMovies] = useState<any>([]);

  const { filterData } = useSortMovies();

  const { popMovies } = usePopMovies();

  const { data, isLoading, isError, errorMsg } = popMovies;

  useEffect(() => {
    const filtredMovies = filterData(data, activeGenre);
    setMovies(filtredMovies);
    /*disabled tsx exhaustive deps cuz this is messing with deployement and 
     the asked dependecies would cause a memory leak */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeGenre, data]);

  return (
    <Container>
      <div className="row">
        <div className="col-md-12">
          <Filter setActiveGenre={setActiveGenre} activeGenre={activeGenre} />
          <div className="cards-container">
            <Backdrop open={isLoading}>
              <CircularProgress color="inherit" />
            </Backdrop>
            {isError && <h1>Error: {errorMsg}</h1>}
            <Cards movies={movies} />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default PopMovies;
