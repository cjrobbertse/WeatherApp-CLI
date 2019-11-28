const request = require('request');

const apiKey = '612fe773df9f2bd1ccca12a40db1e00e';
let cityName = 'london';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apiKey}`;

request(url, function (err, response, body) {
    if (err) {
        console.log('error:', error);
    } else {
        console.log('body:', body);
    }
});

