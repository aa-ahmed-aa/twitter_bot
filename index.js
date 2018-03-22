const Twit = require('twit');
const request = require('request');
const config = require('./config.js');
const cron = require('node-cron');
const tBot = new Twit(config);

var T = new Twit( config );
let randomSurah = getRandomInt(1,114);

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    //The maximum is exclusive and the minimum is inclusive
    return Math.floor(Math.random() * (max - min)) + min;
};

const randomSurah = getRandomInt(1, 114);

//get the sura
request(`http://api.alquran.cloud/surah/${randomSurah}`,
    (error, response, body) => {
        const result = JSON.parse(body);
        // Print the HTML for the Google homepage.
        const maxNumberOfAyat = result.data.numberOfAyahs; 
        //get the aya
        const randomNumberofAya = getRandomInt(1, maxNumberOfAyat);
        
        request(`http://api.alquran.cloud/ayah/${randomSurah}:${randomNumberofAya}`, 
            (error, response, body) => {
  		      const result = JSON.parse(body);
  		      //get the text of the aya
  		      const randomAya = result.data.text;
  		      tBot.post('statuses/update', { status: randomAya });
            });
    });

cron.schedule('* * * * *', function(){
    tweetRandomVerse();
    console.log("i tweeted random verse chell up");
});