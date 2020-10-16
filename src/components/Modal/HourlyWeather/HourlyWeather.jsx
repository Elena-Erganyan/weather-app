import React from "react";
import HourlyCard from "./HourlyCard/HourlyCard";
import "./HourlyWeather.scss"


const HourlyWeather = (props) => {

    const hourlyWeather = props.hourlyWeatherData.map((item, index) => {
        return <HourlyCard key={index} date={item.dt} temp={item.temp} icon={item.weather[0].icon} />
    });

    return (
        <div className="hourlyWeather">
            {hourlyWeather}
        </div>
    );
}

export default HourlyWeather;