var express = require('express');
var path = require('path');
var router = express.Router();
var adjectives = require('./../../adjectives');
var nouns = require('./../../nouns');

router.get('/', function (request, response) {
    response.sendFile(path.join(__dirname, '../public/views/index.html'));
});

router.get('/adjectives', function(request, response) {
    response.send(adjectives);
});

router.get('/nouns', function(request, response) {
    response.send(nouns);
});

module.exports = router;
