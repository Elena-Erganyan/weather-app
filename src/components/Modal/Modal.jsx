import React from "react";
import HourlyWeather from "./HourlyWeather/HourlyWeather";
import "./Modal.scss";


const Modal = (props) => {

    const onCloseClick = () => {
        props.toggleIsModalActive(false);
    }

    const onKeyDown = (evt) => {
        if (evt.keyCode === 27) {
            props.toggleIsModalActive(false);
        }
    }

    document.addEventListener("keydown", onKeyDown);

    return <div className="overlay">
        <div className="modal">
            <div className="modal__wrapper">
                <button className="closeBtn" onClick={onCloseClick}>Close</button>
                <div className="modal__weather">
                    <HourlyWeather hourlyWeatherData={props.hourlyWeatherData}
                        toggleIsModalActive={props.toggleIsModalActive} />
                </div>
            </div>
        </div>
    </div>
};

export default Modal;