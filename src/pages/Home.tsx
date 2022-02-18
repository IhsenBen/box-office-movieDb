import React, { useState } from 'react';

import apiResponse from '../Hooks/useAPI';
import sortedMovies from '../Hooks/useSortMovies';

import ErrorModal from '../components/Modal/ErrorModal';
import LoadingSpinner from '../components/loadingSpinner/LoadingSpinner';
import Card from '../components/Cards/Card';
import Slider from '../components/Slider/Slider';
import Filter from '../components/FilterMenu/Filter';

function Home() {
  // To get the api call and the function that clear the Modal
  const { state, handleClear } = apiResponse();
  //to get Modified from useData
  const { sliderMovies, cardMovies } = sortedMovies();
  // Keep track of the active genre to filter in Card
  const [activeGenre, setActiveGenre] = useState<String>('All');
  // To filter Data
  const [filtred, setFiltred] = useState<any>([]);
  // Getting the states from the api call
  const { isLoading, isError, errorMsg } = state;

  return (
    <React.Fragment>
      <ErrorModal error={isError} onClear={handleClear} errorMsg={errorMsg} />
      <Slider sliderMovies={sliderMovies} />
      {isLoading && (
        <div className="grid place-items-center h-screen ">
          <LoadingSpinner />
        </div>
      )}
      <Filter
        cardMovies={cardMovies}
        setFiltered={setFiltred}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      {/* makes sure to have all movies on initial load */}
      <Card moviesCards={filtred.length === 0 ? cardMovies : filtred} />
    </React.Fragment>
  );
}

export default Home;
