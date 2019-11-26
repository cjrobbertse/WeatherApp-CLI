const request = require('request');
const argv = require('yargs').argv;

let apiKey = '0b4d2c63acbd6b27807ea29bb53e48b4';
let city = argv.c || 'london';
let url = 'http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`';

request(url, (err, response, body) => {
    if (err) {
        console.log('error:', error);
    } else {
        console.log(body);
        let weather = JSON.parse(body);
        let message = `It's ${weather.main.temp} degrees in ${weather.name}`;
        console.log(message);
    }
});