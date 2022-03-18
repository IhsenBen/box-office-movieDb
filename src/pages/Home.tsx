import React, { useEffect, useState } from 'react';
import Cards from '../components/Cards/Cards';
import Backdrop from '@mui/material/Backdrop';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';

import useMDBAPI from '../Hooks/useMDBAPI';
import useSortMovies from '../Hooks/useSortMovies';

import Filter from '../components/FilterMenu/Filter';

function Home() {
  const [activeGenre, setActiveGenre] = useState<string>('All');
 

  const { filterData } = useSortMovies();
  const { mdbData } = useMDBAPI();

  const { data, isLoading, isError, errorMsg } = mdbData;

  const filtredMovies = filterData(data, activeGenre);
  
 
  
  

  return (
 
    <Container >
        <div className="row">
          <div className="col-md-12">
            <Filter setActiveGenre={setActiveGenre} activeGenre={activeGenre} />
            <div className="cards-container">
               <Backdrop open={isLoading} >
                <CircularProgress color="inherit" />
               </Backdrop>
              {isError && <h1>Error: {errorMsg}</h1>}
              <Cards movies={filtredMovies} />
            </div>
          </div>
        </div>
        </Container>
  );
}

export default Home;
