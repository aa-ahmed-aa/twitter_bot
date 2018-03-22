var Twit = require('twit');
var request = require('request');
var config = require('./config.js');
var fs = require('fs');
var cron = require('node-cron');


var T = new Twit( config );
let randomSurah = getRandomInt(1,114);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

//get the sura
function tweetRandomVerse()
{
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
}

cron.schedule('* * * * *', function(){
    tweetRandomVerse();
    console.log("i tweeted random verse chell up");
});