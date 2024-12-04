 import React from 'react';
 import WeatherIcon from "../WeatherIcon/WeatherIcon.jsx"
 
 const WeatherData = ({ forecast }) => {

    return (
        <>
            <div className='weather'>
                <h2>{forecast.day}</h2>
                <WeatherIcon img={forecast.img} imgAlt={forecast.imgAlt} />
                <p><span>conditions:</span>{forecast.conditions}</p>
                <p><span>time: </span>{forecast.time}</p>
            </div>    
        </>
    )

 }

 export default WeatherData;