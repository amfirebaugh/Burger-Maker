// dependencies
var express = require('express');
var burgSQL = require('../models/burger.js');

// bring in the express Router
var router = express.Router();

router.get('/', function(req, resp) {
    burgSQL.selectAll(function(data) {
        var hbsObject = {
            burgers : data
        };
        console.log(hbsObject);
        resp.render('index', hbsObject);
    });
});

router.post('/api/burgers/:burger', function(req, resp) {
    burgSQL.insertOne(req.params.burger, function(result) {
        console.log(result);
    });
});

router.put('/api/burgers/:burger', function(req, resp) {
    burgSQL.updateOne(req.params.burger, function(result) {
        console.log(result);
    });
});

module.exports = router;