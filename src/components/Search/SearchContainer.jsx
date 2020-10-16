import React from "react";
import { connect } from "react-redux";
import { requestWeatherData, setCity } from "../../redux/weather-reducer";
import Search from "./Search";


class SearchContainer extends React.Component {

    render() {
        return <Search setCity={this.props.setCity}
            requestWeatherData={this.props.requestWeatherData} />
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCity: (city) => {
            dispatch(setCity(city));
        },
        requestWeatherData: (city) => {
            dispatch(requestWeatherData(city));
        }
    };
};

export default connect(null, mapDispatchToProps)(SearchContainer);