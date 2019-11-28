# WeatherApp-CLI

Learn to make API calls and build a Command Line Weather App.

## Pre-requsites

1. Go to [OpenWeatherMap.org](https://openweathermap.org/appid) and sign up (20 seconds).
2. Install [NodeJS](https://nodejs.org/en/)

## Step 1: Setup the project

1. Create an empty directory named node-weather and run

    ```zsh
    npm init
    ```

2. Enter the information needed (Press enter for all defaults is fine).

    My `package.json` file looks like this after first time setup.

    *Note: Yours may look slightly different, that's okay.*

    ```json
    {
    "name": "weatherapp-cli",
    "version": "1.0.0",
    "description": "Learn to make API calls and build a Command Line Weather App.",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "repository": {
        "type": "git",
        "url": "git+https://github.com/cjrobbertse/WeatherApp-CLI.git"
    },
    "author": "Christopher Robbertse",
    "license": "ISC",
    "bugs": {
        "url": "https://github.com/cjrobbertse/WeatherApp-CLI/issues"
    },
    "homepage": "https://github.com/cjrobbertse/WeatherApp-CLI#readme"
    }
    ```

3. Create a file named `index.js` - this file will contain the code for our applcation for now.s

## Step 2: Making the API call

To make our API call, we’ll be using a popular npm module called [`request`](https://www.npmjs.com/package/request). `request` has millions of downloads and is a module that simplifies the code needed to make an http `request` in node.

Install the `request` module into your project

```zsh
npm install request --save
```

To use the `request` module within your code you must first import the module into the file.

```js
const request = require('request');
```

Pass `request` a target `url` and the request will return a callback function. We will check for an error request and log the error. Otherwise we log the response's body.

```js
request(url, (error, response, body) => {
    if(error) {
        console.log('error:', error);
    } else {
        console.log('body:', body);
    }
});
```

Now we need to define what the `url` is.

By reading the OpenWeatherMap's current weather API [documentation](https://openweathermap.org/current), you can find out what the url to use for the request.

### Tasks: API URL

1. Find the template URL for the current weather on the [OpenWeatherMap](https://openweathermap.org/current) website (by city name only).
2. Assign a new variable called `url` that is equal to the api call url.

    *Hint: Use a template string so that we can substitute in a `cityName` variable. -> [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)*

3. Assign a new variable called `cityName` and make it equal to the name of a city (string)
4. Add '`$`' infront of `{cityName}` to make symbolise a JavaScript variable.
5. Run your code now you should see a response from OpenWeatherMap.org

    ```zsh
    $ node index.js
    body: {"cod":401, "message": "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."}
    ```

    The `401` status is okay for now, we still need to setup an API key to use the service.

If nothing happens or you get an error message, check your `index.js` file looks like this:

```js
const request = require('request');

let cityName = 'london';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}`;

request(url, function (err, response, body) {
    if (err) {
        console.log('error:', error);
    } else {
        console.log('body:', body);
    }
});
```

### Tasks: API key

Now we must provide a valid API key to be allowed to acccess to the weather data.

1. On [this](https://openweathermap.org/appid) page we can see that we must add `&APPID={APIKEY}` to the end of our url.
2. Assign a new varible called `apiKey` and give it the value of your default API key, found [here](https://home.openweathermap.org/api_keys).
3. Run your code. You should see the full response from OpenWeatherMap.org.

    ```zsh
    $ node index.js
    body: {"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":310,"main":"Drizzle","description":"light intensity drizzle rain","icon":"09n"},{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"base":"stations","main":{"temp":282.14,"pressure":986,"humidity":100,"temp_min":280.93,"temp_max":283.15},"visibility":6000,"wind":{"speed":5.7,"deg":250},"rain":{"1h":0.25},"clouds":{"all":75},"dt":1574887764,"sys":{"type":1,"id":1412,"country":"GB","sunrise":1574840259,"sunset":1574870326},"timezone":0,"id":2643743,"name":"London","cod":200}
    ```

If you get an error, check your `index.js` file looks like this:

```js
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
```

If your `index.js` file does look like this, but you see the response:

```zsh
$ node index.js
body: {"cod":401, "message": "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."}
```

Your API key is still invalid as it takes roughly 10 minutes from creating your OpenWeatherMaps account to validate your default API key.

## Cleaning up our response

