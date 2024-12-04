import React from 'react';

const WeatherIcon = ({ img, imgAlt }) => {
    return (
        <img src={img} alt={imgAlt}></img>
    )
}

export default WeatherIcon;