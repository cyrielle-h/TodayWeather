let temperature = document.querySelector('.temperature-now');
let place = document.querySelector('.city');
let pressure = document.querySelector('.detail-result__pressure');
let wind = document.querySelector('.detail-result__wind');
let humidity = document.querySelector('.detail-result__Humidity');
let description = document.querySelector('#weather-description');
let round = Math.round(temperature);

let icon          = document.querySelector('.weather__icon--today');

let root   = 'https://api.openweathermap.org';
let apiKey = '8682ae70ef78caa3eef84e53a0fb2349';
let city   = 'Lisbon';
let path   = 'data/2.5/weather';

axios.get(root + '/' + path + '?q=' + city + '&appid=' + apiKey + '&units=metric')
  .then(function(response) {

console.log(response);
temperature.innerHTML = response.data.main.temp;
place.innerHTML = 'in ' + response.data.name;
pressure.innerHTML = response.data.main.pressure; 
wind.innerHTML = response.data.wind.speed + ' km/h';
humidity.innerHTML = response.data.main.humidity + ' %';

// description.innerHTML = response.data.weather[0].main;

// let pathForecast = 'data/2.5/forecast';

// axios.get(root + '/' + pathForecast + '?q=' + city + '&appid=' + apiKey + '&units=metric')
//   .then(function(response) {

 });
