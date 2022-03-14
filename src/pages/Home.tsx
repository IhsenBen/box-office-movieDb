import React, { useState } from 'react';

import useMDBAPI from '../Hooks/useMDBAPI';
import useSortMovies from '../Hooks/useSortMovies';

import LoadingSpinner from '../components/loadingSpinner/LoadingSpinner';
import Card from '../components/Cards/Card';
import Filter from '../components/FilterMenu/Filter';

function Home() {
  // To get the api call and the function that clear the Modal
  const { mdbData, handleClearError } = useMDBAPI();
  //to get Modified from use
  const { filtredMovies, filterData } = useSortMovies();

  // Keep track of the active genre to filter in Card
  const [activeGenre, setActiveGenre] = useState<String>('All');
  // To filter Data
   const [filtred, setFiltred] = useState<Array<Object>>([])


    let Action = filterData(mdbData,'Action');

  return (
    <React.Fragment>
      <p>{JSON.stringify(Action)}</p>

    </React.Fragment>
   
    
  );
}

export default Home;
