import React from 'react';
import { connect } from 'react-redux';
import App from './App';
import { toggleIsModalActive } from './redux/weather-reducer';


const AppContainer = (props) => {
    return <App city={props.city} error={props.error}
        hourlyWeatherData={props.hourlyWeatherData} isModalActive={props.isModalActive}
        toggleIsModalActive={props.toggleIsModalActive} />
};

const mapStateToProps = (state) => {
    return {
        city: state.city,
        error: state.error,
        hourlyWeatherData: state.hourlyWeatherData,
        isModalActive: state.isModalActive
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleIsModalActive: (isModalActive) => {
            dispatch(toggleIsModalActive(isModalActive))
        }
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
