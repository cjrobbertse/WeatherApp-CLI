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

Pass request a target URL and request will return a callback function.

```js
request(url, (err, response, body) => {});
```

The request will return a callback function

To use request we need to pass in our target URL and request will return a callback function.
