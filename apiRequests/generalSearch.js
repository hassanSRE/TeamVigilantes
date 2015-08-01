var request = require('request');

var host = 'https://api.tmsandbox.co.nz';
var path = '/v1/Search/General.json';

var search = function(req,callback) {
    console.log(req);
    request({
        url: host+path,
        method: 'GET',
        qs: {
            category: req.category,
            //date_from: req.date,
            user_region: req.region
        },
        headers: {
            'Authorization' : 'OAuth oauth_consumer_key="C7713CB813EFCF0A157D5D032DED734D", oauth_signature_method="PLAINTEXT", oauth_signature="28AD8767E177E7FF1758065ECE584A9E&"'
        }
    }, function(error, response, body) {
        console.log(body);
        var data = JSON.parse(body);

        if(data.TotalCount==0) return [];
        var items = [];

        var elemList = data.List;
        for(var i=0;i<elemList.length;i++){
            elem = elemList[i];
            items.push(
                {
                    id:elem.ListingId,
                    title:elem.Title,
                    thumb:elem.PictureHref
                }
            );
        }
        callback(items);
    });
}

module.exports = {
    getSearch:search
}