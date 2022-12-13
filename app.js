// const express = require('express')
// const app = express()
// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly',
//   params: {lat: '27.4757', lon: '77.6937'},
//   headers: {
//     'X-RapidAPI-Key': 'df78fe93e8msh3461ad3661b4656p1c90abjsn34da11e9d4d7',
//     'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'df78fe93e8msh3461ad3661b4656p1c90abjsn34da11e9d4d7',
		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
	}
};

fetch('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=27.4757&lon=77.6937', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));