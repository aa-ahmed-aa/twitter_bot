var Twit = require('twit')
 
var T = new Twit({
  consumer_key:         'GCrKBXIeVi857kiEloAbU3cje',
  consumer_secret:      'J438huNwCscwIIX7fb2j483xQrrQiOnYKZlAvi69am9tDIRDMr',
  access_token:         '3078652071-vYVePMD47Ehv61zntHU9pqqAiv6iptNpvoDVUFA',
  access_token_secret:  'O9tHRfPZGTfYRftXmdIbJtTb17hdryqcpeqqRrkg8eIIM',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests. 
})
 
// 
//  tweet 'hello world!' 
// 
T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
  console.log(data)
})
