import React from "react";
import "./Search.scss";


class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            city: ""
        };
    }

    onChange = (evt) => {
        this.setState({ city: evt.currentTarget.value });
    }

    requestData = () => {
        this.props.setCity(this.state.city);
        this.props.requestWeatherData(this.state.city);
    }

    onClick = () => {
        this.requestData();
    }

    onKeyDown = (evt) => {
        if (evt.keyCode === 13) {
            this.requestData();
        }
    }

    render() {
        return (
            <div className="search">
                <input className="search__field" type="text" onChange={this.onChange} onKeyDown={this.onKeyDown} />
                <button className="btn search__btn" onClick={this.onClick}>Set city</button>
            </div>
        );
    }
}

export default Search;