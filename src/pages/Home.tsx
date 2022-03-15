import React, { useState } from 'react';

import useMDBAPI from '../Hooks/useMDBAPI';
import useSortMovies from '../Hooks/useSortMovies';

// import LoadingSpinner from '../components/loadingSpinner/LoadingSpinner';
// import Card from '../components/Cards/Card';
// import Filter from '../components/FilterMenu/Filter';

function Home() {
  
   const {  filterData } = useSortMovies();

    const {mdbData} = useMDBAPI();
    const Action = filterData(mdbData.data,'');
    console.log(Action);

  return (
    <React.Fragment>
      <h1>Test </h1>
      <p>{JSON.stringify(mdbData.data)}</p>
      <p>{JSON.stringify(Action)}</p>

    </React.Fragment>
   
    
  );
}

export default Home;
