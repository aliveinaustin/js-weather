class Weather {
    constructor(city, state) {
        this.apiKey = 'f05ea7fe100b1f22';
        this.city = city
        this.state = state
    }

    // Fetch WX from API
    async getWeather() {
        const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);

        const responseData = await response.json();

        return responseData.current_observation;
    }

    // Change WX location
    changeLocation(city, state) {
        this.city = city,
        this.state = state
    }
}