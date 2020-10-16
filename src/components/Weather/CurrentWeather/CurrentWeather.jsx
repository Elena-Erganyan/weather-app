import React from "react";
import "./CurrentWeather.scss";


const CurrentWeather = (props) => {

    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    const date = new Date().toLocaleString('en-US', options);

    const tempC = Math.round(props.currentWeatherData.main.temp - 273.15);
    const feelTempC = Math.round(props.currentWeatherData.main.feels_like - 273.15);
    const pressure = Math.round(props.currentWeatherData.main.pressure / 1.333);
    const sunrise = new Date(props.currentWeatherData.sys.sunrise * 1000).toLocaleTimeString().slice(0, 5);
    const sunset = new Date(props.currentWeatherData.sys.sunset * 1000).toLocaleTimeString().slice(0, 5);

    const onClick = () => {
        props.requestHourlyWeatherData(props.currentWeatherData.coord);
    };

    return (
        <>
            <div className="currentWeather">
                <div className="currentWeather__mainParameters">
                    <div className="currentWeather__city">{props.currentWeatherData.name}, {props.currentWeatherData.sys.country}</div>
                    <div className="currentWeather__date">{date}</div>
                    <div className="currentWeather__icon">
                        <img src={`http://openweathermap.org/img/wn/${props.currentWeatherData.weather[0].icon}@2x.png`} alt="weatherIcon" />
                    </div>
                    <div className="currentWeather__temp">{tempC}&deg;C</div>
                    <div className="currentWeather__main">{props.currentWeatherData.weather[0].description}</div>
                </div>
                <div className="currentWeather__otherParameters">
                    <div className="currentWeather__feelTemp"><span className="parameterName">Real feel</span><span className="parameterValue">{feelTempC}&deg;C</span></div>
                    <div className="currentWeather__pressure"><span className="parameterName">Pressure</span><span className="parameterValue">{pressure} mmHg</span></div>
                    <div className="currentWeather__humidity"><span className="parameterName">Humidity</span><span className="parameterValue">{props.currentWeatherData.main.humidity}&#37;</span></div>
                    <div className="currentWeather__wind"><span className="parameterName">Wind</span><span className="parameterValue">{props.currentWeatherData.wind.speed}mph</span></div>
                    <div className="currentWeather__sunrise"><span className="parameterName">Sunrise</span><span className="parameterValue">{sunrise}</span></div>
                    <div className="currentWeather__sunset"><span className="parameterName">Sunset</span><span className="parameterValue">{sunset}</span></div>
                </div>
            </div>
            <button className="currentWeather__btn btn" onClick={onClick}>See 48 hours forecast</button>
        </>
    );
};

export default CurrentWeather;