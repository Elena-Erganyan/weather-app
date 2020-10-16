import React from 'react';
import './App.scss';
import Modal from './components/Modal/Modal';
import SearchContainer from './components/Search/SearchContainer';
import WeatherContainer from './components/Weather/WeatherContainer';


const App = (props) => {

  return (
    <div className="app">
      <h1 className="app__title">Weather App</h1>
      <SearchContainer />
      {props.city && !props.error && <WeatherContainer />}
      {props.error && <div className="app__error">Sorry, the city was not found</div>}
      { props.isModalActive &&
        <Modal hourlyWeatherData={props.hourlyWeatherData}
          toggleIsModalActive={props.toggleIsModalActive} />}
    </div >
  );
};

export default App;
