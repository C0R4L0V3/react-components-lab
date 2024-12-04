import { useState } from 'react'
import './App.css'
import WeatherForecasts from './components/WeatherForcast.jsx';
import WeatherData from './components/WeatherData/WeatherData.jsx';

// src/App.jsx

const weatherForecasts = [
  {
    day: 'Mon',
    img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/day.svg',
    imgAlt: 'sun icon',
    conditions: 'sunny',
    time: 'Morning',
  },
  {
    day: 'Tue',
    img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/night.svg',
    imgAlt: 'moon icon',
    conditions: 'clear',
    time: 'Night',
  },
  {
    day: 'Wed',
    img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/stormy.svg',
    imgAlt: 'clouds with lightning icon',
    conditions: 'stormy',
    time: 'All Day',
  },
  {
    day: 'Thu',
    img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-day_t7ckxp.svg',
    imgAlt: 'sun overcast by clouds icon',
    conditions: 'overcast',
    time: 'Evening',
  },
  {
    day: 'Fri',
    img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-night.svg',
    imgAlt: 'moon overcast by clouds icon',
    conditions: 'cloudy',
    time: 'Night',
  },
];


const App = () => {

  return (
    <>
     <h1>Local Weather</h1>
  <section>
    {/* // Weather data here */}
      {/* map through the array object, adding an index to prevent key'ing issues */}
      {/* {weatherForecasts.map ((weather, index) => ( */}
      {/* passing the weatherForecasts data to WeatherForecasts */}
        <WeatherForecasts forecasts={weatherForecasts}
          // key={index}
          // weather={weather}

        />
      {/* ))} */}
  </section>
    </>
  );
}

export default App
