import React from 'react';
import './WeatherForecast.css';
import WeatherData from './WeatherData/WeatherData';


// deconstucting props
const WeatherForecasts = ({ forecasts }) => {

    return (
        <>
           {forecasts.map((forecast, index) => (
                <WeatherData key={index} forecast={forecast} />
           ))}
        </>

    )
}

export default WeatherForecasts;

  // <>
        //     <div className='weather'>
        //         <h2>{weather.day}</h2>
        //         <img src={weather.img}></img>
        //         <p><span>conditions: </span>{weather.conditions}</p>
        //         <p><span>time: </span>{weather.time}</p>
        //     </div>    
        // </>
    