 class WeatherService {
    constructor(api_key, api_url) {
        this.api_key = api_key;
        this.api_url = api_url;
    }

    getWeather(cityName) {
        return fetch(this.api_url + `?access_key=${this.api_key}&query=${cityName}`, {})
            .then(response => response.json());
    }
}

 class CityWeather {
    constructor(location, temperature, visibility) {
       this.location = location;
       this.temperature = temperature;
       this.visibility = visibility;
    }

    display() {
        console.log(`Weather temp ${this.temperature} C, visibility ${this.visibility}`);
        console.log(`Location ${this.location}`);
    }
}

const weatherService = new WeatherService('8b20d9ae04b3882f2d0324d5f6265d83', 'http://api.weatherstack.com/current');

weatherService.getWeather('Moscow').then(weather => {
        const cityWeather = new CityWeather(weather.location.country, weather.current.temperature, weather.current.visibility);
        cityWeather.display()
}).catch(error => console.log(error))