var Twit = require('twit');
var request = require('request');
var config = require('./config.js');
fs = require('fs');

var T = new Twit( config );

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

let randomSurah = getRandomInt(1,114);

//get the sura
request('http://api.alquran.cloud/surah/'+randomSurah, function (error, response, body) {
  let result = JSON.parse(body);
  maxNumberOfAyat  = result['data']['numberOfAyahs']; // Print the HTML for the Google homepage.

  //get the aya
  let randomNumberofAya = getRandomInt(1,maxNumberOfAyat);
  request('http://api.alquran.cloud/ayah/'+randomSurah+':'+randomNumberofAya, function (error, response, body) {
  		let result = JSON.parse(body);
  		
  		//get the text of the aya
  		let randomAya = result['data']['text'];

  		T.post('statuses/update', { status: randomAya }, function(err, data, response) {
		  console.log(data)
		});

  });

});