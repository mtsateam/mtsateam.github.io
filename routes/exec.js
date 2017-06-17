var express = require('express');
var router = express.Router();
var db = require('../database/exec_db');
var connection = require('../database/connection')

router.get('/', function(req, res, next){
    connection.executeQuery("SELECT * FROM communication;", function(db){
        res.send(db);
    })
});

router.get('/:id', function(req, res, next){
    exec_id = req.params.id;
    connection.executeQuery("SELECT * FROM communication WHERE Name='" + exec_id + "';", function(db){
        res.send(db);
    })
});

module.exports = router;
