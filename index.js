const request = require('request');
const argv = require('yargs').argv;

const APIKEY = '8bad6775b898922bc78d3f42c358aa35';
let city = argv.c || 'london';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`;

request(url, (err, response, body) => {
    if (err) {
        console.log('error:', error);
    } else {
        // console.log(body);
        let weather = JSON.parse(body);
        let message = `It's ${weather.main.temp} degrees in ${weather.name}`;
        console.log(message);
    }
});