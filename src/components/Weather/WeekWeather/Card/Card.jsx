import React from "react";
import "./Card.scss";

const Card = (props) => {

    const tempC = Math.round(props.temp - 273.15);
    const date = new Date(props.date * 1000).toLocaleString().slice(0, 5);

    return (
        <div className="card">
            <div className="card__date">{date}</div>
            <div className="card__icon">
                <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="icon" />
            </div>
            <div className="card__temp">{tempC}&deg;C</div>
        </div>
    );
};

export default Card;