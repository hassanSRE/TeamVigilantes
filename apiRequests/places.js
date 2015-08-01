var request = require('request');

var host = 'https://api.tmsandbox.co.nz';
var path = '/v1/TmAreas.json';

var locality = function(callback) {
    var toRet = {localities:[]};
    request({
        url: host + path,
        method: 'GET',
        headers: {
            'Authorization': 'OAuth oauth_consumer_key="C7713CB813EFCF0A157D5D032DED734D", oauth_signature_method="PLAINTEXT", oauth_signature="28AD8767E177E7FF1758065ECE584A9E&"'
        }
    }, function (error, response, body) {
        var json = JSON.parse(body);
        for (var i = 0; i < json.length; i++) {
            locality = json[i];
            toRet.localities.push({
                name: locality.Name,
                id: locality.LocalityId
            });
        }
        console.log(JSON.stringify(toRet));
        callback(JSON.stringify(toRet));
    });
}

var district = function(id,callback) {
    request({
        url: host + path,
        method: 'GET',
        headers: {
            'Authorization': 'OAuth oauth_consumer_key="C7713CB813EFCF0A157D5D032DED734D", oauth_signature_method="PLAINTEXT", oauth_signature="28AD8767E177E7FF1758065ECE584A9E&"'
        }
    }, function (error, response, body) {
        var json = JSON.parse(body);
        for (var i = 0; i < json.length; i++) {
            var locality=json[i];
            if(id===locality.LocalityId){
                for (var j = 0; j < locality.districts.length; j++) {

                }
            }
        }
        console.log(JSON.stringify(toRet));

    });
}

module.exports = {
    getLocality:locality,
    getDistricts:district
}