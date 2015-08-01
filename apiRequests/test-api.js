var request = require('request');

var host = 'https://api.tmsandbox.co.nz';
var path = '/v1/Search/General.json?buy=All&category=3720&clearance=All&condition=All&expired=false&pay=All&photo_size=Thumbnail&return_metadata=false&shipping_method=All&sort_order=Default';

request({
    url: host+path,
    method: 'GET',
    headers: {
        'Authorization' : 'OAuth oauth_consumer_key="C7713CB813EFCF0A157D5D032DED734D", oauth_signature_method="PLAINTEXT", oauth_signature="28AD8767E177E7FF1758065ECE584A9E&"'
    }
}, function(error, response, body) {
    console.log(body);
});