import { weatherAPI } from "../api/api";

const initialState = {
    city: null,
    error: false,
    currentWeatherData: {},
    weekWeatherData: [],
    hourlyWeatherData: [],
    isModalActive: false,
    isFetching: false
};

const SET_CITY = "SET_CITY";
const SET_CURRENT_WEATHER_DATA = "SET_CURRENT_WEATHER_DATA";
const SET_WEEK_WEATHER_DATA = "SET_WEEK_WEATHER_DATA";
const SET_HOURLY_WEATHER_DATA = "SET_HOURLY_WEATHER_DATA";
const TOGGLE_IS_MODAL_ACTIVE = "TOGGLE_IS_MODAL_ACTIVE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_ERROR = "TOGGLE_ERROR";

const weatherReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_CITY:
            return {
                ...state,
                city: action.city
            };
        case SET_CURRENT_WEATHER_DATA:
            return {
                ...state,
                currentWeatherData: { ...action.currentWeatherData }
            };
        case SET_WEEK_WEATHER_DATA:
            return {
                ...state,
                weekWeatherData: [...action.weekWeatherData],
            };
        case SET_HOURLY_WEATHER_DATA:
            return {
                ...state,
                hourlyWeatherData: [...action.hourlyWeatherData],
            };
        case TOGGLE_IS_MODAL_ACTIVE:
            return {
                ...state,
                isModalActive: action.isModalActive
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case TOGGLE_ERROR:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
};

export const toggleIsModalActive = isModalActive => ({ type: TOGGLE_IS_MODAL_ACTIVE, isModalActive });

export const toggleIsFetching = isFetching => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const toggleError = error => ({ type: TOGGLE_ERROR, error });

export const setCity = city => ({ type: SET_CITY, city });

export const setCurrentWeatherData = currentWeatherData => ({ type: SET_CURRENT_WEATHER_DATA, currentWeatherData });

export const setWeekWeatherData = weekWeatherData => ({ type: SET_WEEK_WEATHER_DATA, weekWeatherData });

export const setHourlyWeatherData = hourlyWeatherData => ({ type: SET_HOURLY_WEATHER_DATA, hourlyWeatherData });

export const requestWeatherData = city => {

    return async dispatch => {

        dispatch(toggleIsFetching(true));

        const responseCurrent = await weatherAPI.getCurrentWeather(city);
        const responseWeek = await weatherAPI.getWeekWeather(city);

        if (responseCurrent.status === 200 && responseWeek.status === 200) {

            const currentWeatherData = await responseCurrent.json();
            dispatch(setCurrentWeatherData(currentWeatherData));

            const weekWeatherData = await responseWeek.json();
            const dailyWeatherData = await weekWeatherData.list.filter(reading => reading.dt_txt.includes("12:00:00"));
            dispatch(setWeekWeatherData(dailyWeatherData));
            dispatch(toggleError(false));

        } else {
            dispatch(setCity(null));
            dispatch(setCurrentWeatherData({}));
            dispatch(setWeekWeatherData([]));
            dispatch(setHourlyWeatherData([]));
            dispatch(toggleError(true));
        }

        dispatch(toggleIsFetching(false));
    };
};

export const requestHourlyWeatherData = coord => {

    return async dispatch => {

        dispatch(toggleIsModalActive(true));

        const response = await weatherAPI.getHourlyWeather(coord);

        if (response.status === 200) {
            const weatherData = await response.json();
            dispatch(setHourlyWeatherData(weatherData.hourly));

        } else {
            alert(`Some error ocurred: ${response.status}: ${response.statusText}`);
        }
    };
};


export default weatherReducer;