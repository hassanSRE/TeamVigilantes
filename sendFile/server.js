var express = require('express');
var app = express();
var path = require('path');
var places = require('../apiRequests/places');
var categories = require('../apiRequests/categories');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

//Get a list of large areas Eg. Wellington region
app.get('/locality', function(req, res){
    places.getLocality(function(data){
        res.send(data);
    });
});

//Get a list of smaller areas Eg. Wellington city
app.get('/district/:id', function(req, res){
    places.getLocality(req.parameters.id, function(data){
        res.send(data);
    });
});

//Get a list of top level categories
app.get('/categories', function(req, res){
    res.send(categories.getCategories());
});

//1st sub level of categories
app.get('/subcategories/:id', function(req, res){
    res.send(categories.getSubCategories(req.params.id));
});

//2nd sub level of categories
app.get('/subsubcategories/:id', function(req, res){
    res.send(categories.getSubSubCategories(id));
});

//3rd sub level of categories
app.get('/subsubsubcategories/:id', function(req, res){
    res.send(categories.getSubSubSubCategories(id));
});

app.listen(8080);