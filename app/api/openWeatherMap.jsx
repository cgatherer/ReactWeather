var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'https://samples.openweathermap.org/data/2.5/find?appid=a41e0cae3e3f5465af5bc12dfd17ebc8&units=imperial';

// a41e0cae3e3f5465af5bc12dfd17ebc8

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodedURIComponet(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res){
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}
