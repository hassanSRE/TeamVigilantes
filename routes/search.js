var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var search = require('../apiRequests/generalSearch');

var request = require('request');
var host = 'https://api.tmsandbox.co.nz';
var path = '/v1/Search/General.json';

/* GET users listing. */
router.get('/', function(req, res, next) {
  var mRequest = {
    date: "",
    district: 66,
    catagories: [1]
  }

  search.getSearch(mRequest, function(data){
    res.send(data);
  });
});

module.exports = router;
