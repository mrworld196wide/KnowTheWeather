<h3> How to Run this App </h3>

```bash
# Clone this repository
$ git clone https://github.com/mrworld196wide/KnowTheWeather.git
```

<h1>More about the Web App</h1>

## Making API Call
To make our API call, we’ll be using a popular npm module called request. request has millions of downloads and is a module that simplifies the code needed to make an http request in node.

Install request by running:

```
npm install request --save
```

Request is pretty easy to use. Just pass in the target url, and request returns a callback function. 
The starter code would look something like this:

```
const request = require('request');
request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    console.log('body:', body);
  }
});
```
Here, 
- Firstly we require the request package
- Then we pass in a url, and request returns a callback function with three arguments: err, response, and the body.
- Then we check for an error in our request. If there is one, we log the error and are done.
- If there is no error, we log the entire contents of the response body.

For more info about the weather API give a read to the doc
https://openweathermap.org/current

Here’s what the code will look like:

```
let apiKey = '****************************';
let city = 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
```

here,
- Created a variable named apiKey and assigned it the string value of our API Key (note: your API key is meant to be inserted here)
- Created a variable named city and assigned it a string value of the city we’d like to test with
- Created a variable named url and assigned it the OpenWeatherMap url with our two required query parameters. Notice that query params start with a ? question mark. They are then indicated with key/value pairs separated by an = equal sign. Different key/value pairs are separated with an & ampersand.

## Cleaning up our response
The first thing we need to do is convert the jumbled text that’s returned (called JSON) into a JavaScript Object. (JavaScript Object Notation) is a way to store information in an organized and easy to access manner 
We can make this conversion with one line of code:
```
let weather = JSON.parse(body)
```

## Adding in interactivity
We can only access the weather for Portland, Oregon. Lets add some interactivity. For this, we’ll use yargs. Yargs is a pirate themed interactive command line interface tool. Or more simply put, it allows us to define variables from the command line.

Install yargs with:

```

```

## Example of API response

```
{
  "coord": {
    "lon": 10.99,
    "lat": 44.34
  },
  "weather": [
    {
      "id": 501,
      "main": "Rain",
      "description": "moderate rain",
      "icon": "10d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 298.48,
    "feels_like": 298.74,
    "temp_min": 297.56,
    "temp_max": 300.05,
    "pressure": 1015,
    "humidity": 64,
    "sea_level": 1015,
    "grnd_level": 933
  },
  "visibility": 10000,
  "wind": {
    "speed": 0.62,
    "deg": 349,
    "gust": 1.18
  },
  "rain": {
    "1h": 3.16
  },
  "clouds": {
    "all": 100
  },
  "dt": 1661870592,
  "sys": {
    "type": 2,
    "id": 2075663,
    "country": "IT",
    "sunrise": 1661834187,
    "sunset": 1661882248
  },
  "timezone": 7200,
  "id": 3163858,
  "name": "Zocca",
  "cod": 200
}                             
```
