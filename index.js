let request = require('request');
let apiKey = '93f7e909769041592bca79e5b6a03a39';
let city = 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

request(url, function (err, response, body) {
    if(err){
      console.log('error:', error);
    } else {
      console.log('body:', body);
    }
  });