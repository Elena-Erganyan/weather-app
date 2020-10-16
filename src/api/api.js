const APIkey = "51dc4b73f6265442f762bd5f8d70d15b";
const baseUrl = "https://api.openweathermap.org/data/2.5/";

export const weatherAPI = {
    getCurrentWeather(city) {
        return fetch(`${baseUrl}weather?q=${city}&appid=${APIkey}`);
    },
    getWeekWeather(city) {
        return fetch(`${baseUrl}forecast?q=${city}&appid=${APIkey}`);
    },
    getHourlyWeather(coord) {
        return fetch(`${baseUrl}onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=current,minutely,daily,alerts&appid=${APIkey}`);
    }
};