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

// need to update innards of post!!
router.post('/api/burgers', function(req, resp) {
    console.log(req.body.name);
    burgSQL.insertOne(req.body.name, function(result) {
        console.log(result);
    });
});

// need to update innards of put!!
router.put('/api/burgers/:burger', function(req, resp) {
    burgSQL.updateOne(req.params.burger, function(result) {
        console.log(result);
    });
});

module.exports = router;