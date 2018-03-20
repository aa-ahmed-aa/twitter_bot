var Twit = require('twit')
var request = require('request');
fs = require('fs');

var T = new Twit({
  consumer_key:         'GCrKBXIeVi857kiEloAbU3cje',
  consumer_secret:      'J438huNwCscwIIX7fb2j483xQrrQiOnYKZlAvi69am9tDIRDMr',
  access_token:         '3078652071-vYVePMD47Ehv61zntHU9pqqAiv6iptNpvoDVUFA',
  access_token_secret:  'O9tHRfPZGTfYRftXmdIbJtTb17hdryqcpeqqRrkg8eIIM',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests. 
});

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