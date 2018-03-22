# Twitter Bot
this is a twitter bot that will tweet random verse from the holy quran every minut i build this bot using node and QuranApi

## Install 
-clone the repo via `git clone https://github.com/aa-ahmed-aa/twitter_bot`
-go to your twitter api account and create app and generage accessTokens for your app
-open `config.js` file and put your credential consumer_key, consumer_secret, access_token, access_token_secret
-run the app using `node index.js`

## Configuration
cron package is working the same as cron tab in linux so if you want to change the factor of time see this graph to do so 
  ┌────────────── second (optional)
  │ ┌──────────── minute
  │ │ ┌────────── hour
  │ │ │ ┌──────── day of month
  │ │ │ │ ┌────── month
  │ │ │ │ │ ┌──── day of week
  │ │ │ │ │ │
  │ │ │ │ │ │
  * * * * * *

## Contribution
feel free to star, fork and issuing about any question or enhancement