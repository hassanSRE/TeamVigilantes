var request = require('request');
var Q = require('q');
var _ = require('underscore')

var host = 'https://api.tmsandbox.co.nz';
var path = '/v1/Search/General.json';
var listingPath = '/v1/Listings/'

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
        var data = JSON.parse(body);

        if(data.TotalCount==0) return [];
        var items = [];
        var counter = 0;
        var elemList = data.List;
        function loop(){
            var elem = elemList[counter];

            getListingDetails(elem.ListingId).then(function(listing){
                var value = JSON.parse(listing);
                items.push(
                    {
                        memberId: value.Member.MemberId,
                        member: value.Member.Nickname,
                        id:elem.ListingId,
                        title:elem.Title,
                        thumb:elem.PictureHref
                    }
                );
                console.log(counter);
                if(counter<elemList.length){counter++;loop();}
                if(counter==elemList.length-1){console.log("got all data");groupByMember(items,callback);}
            });

        };
        loop();

    });
}

function groupByMember(items,callback){
    var dirty = _.groupBy(items,'memberId');
    var clean = [];
    //console.log(dirty);

    for(var memberId in dirty){
        var member = dirty[memberId];
        var cleanItems = [];
        console.log(member);
        for(var j=0;j<member.length;j++){
            var item = member[j];
            cleanItems.push({
                itemid: item.id,
                thumb: item.thumb,
                title: item.title
            });
            console.log("added item")
        };

        clean.push({
            memberId:item.memberId,
            nick:item.member,
            stolenItems:cleanItems
        });
        console.log("added member");
    };
    console.log("going to callback");
    callback({members:clean});
}


function getListingDetails(id){
    var deferred = Q.defer();
    request({
        url: host+listingPath+id+".json",
        method: 'GET',
        headers: {
            'Authorization' : 'OAuth oauth_consumer_key="C7713CB813EFCF0A157D5D032DED734D", oauth_signature_method="PLAINTEXT", oauth_signature="28AD8767E177E7FF1758065ECE584A9E&"'
        }
    }, function(error, response, body) {
        deferred.resolve(body);
    });
    return deferred.promise;
}




module.exports = {
    getSearch:search
}