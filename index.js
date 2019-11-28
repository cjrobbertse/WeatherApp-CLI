const request = require('request');
const argv = require('yargs').argv;

const apiKey = '612fe773df9f2bd1ccca12a40db1e00e';
let cityName = argv.c || 'london';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${apiKey}`;

request(url, function (err, response, body) {
    if (err) {
        console.log('error:', error);
    } else {
        let weather = JSON.parse(body);
        let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        console.log(message);
    }
});
