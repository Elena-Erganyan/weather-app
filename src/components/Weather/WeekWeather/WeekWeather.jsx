import React from "react";
import Card from "./Card/Card";
import "./WeekWeather.scss";


const WeekWeather = (props) => {

    const cards = props.weekWeatherData.map((item, index) => {
        return <Card key={index} date={item.dt}
            temp={item.main.temp} icon={item.weather[0].icon} />
    });

    return (
        <div className="weekWeather">
            {cards}
        </div>
    );
};

export default WeekWeather;