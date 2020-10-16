import React from "react";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import WeekWeather from "./WeekWeather/WeekWeather";


const Weather = (props) => {
    return <>
        <CurrentWeather currentWeatherData={props.currentWeatherData}
            requestHourlyWeatherData={props.requestHourlyWeatherData} />
        <WeekWeather weekWeatherData={props.weekWeatherData} />
    </>
};


export default Weather;