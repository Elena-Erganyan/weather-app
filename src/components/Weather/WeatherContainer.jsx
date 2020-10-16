import React from "react";
import { connect } from "react-redux";
import { requestHourlyWeatherData } from "../../redux/weather-reducer";
import Preloader from "../common/Preloader/Preloader";
import Weather from "./Weather";


class WeatherContainer extends React.Component {

    render() {
        if (this.props.isFetching) return <Preloader />
        return <Weather currentWeatherData={this.props.currentWeatherData}
            weekWeatherData={this.props.weekWeatherData}
            requestHourlyWeatherData={this.props.requestHourlyWeatherData} />
    }
}

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        currentWeatherData: state.currentWeatherData,
        weekWeatherData: state.weekWeatherData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        requestHourlyWeatherData: (coord) => {
            dispatch(requestHourlyWeatherData(coord));
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer);
