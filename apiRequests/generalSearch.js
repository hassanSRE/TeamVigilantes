var request = require('request');

var host = 'https://api.tmsandbox.co.nz';
var path = '/v1/Search/General.json';

var search = function(req,callback) {
    request({
        url: host+path,
        method: 'GET',
        qs: {
            category: req.catagories[0],
            date_from: req.date,
            SuburbId: req.district
        },
        headers: {
            'Authorization' : 'OAuth oauth_consumer_key="C7713CB813EFCF0A157D5D032DED734D", oauth_signature_method="PLAINTEXT", oauth_signature="28AD8767E177E7FF1758065ECE584A9E&"'
        }
    }, function(error, response, body) {
        callback(JSON.stringify(body));
    });
}

module.exports = {
    getSearch:search
}