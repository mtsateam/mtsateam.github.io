var express = require('express');
var router = express.Router();
var connection = require('../connection/database')

//Get all events
router.get('/', function(req, res, next){
  connection.executeQuery("SELECT *, CONVERT(varchar(50), Date, 107) AS EventDate, CONVERT(varchar(50), Time, 108) AS EventTime FROM Events ORDER BY CreationDate;", function(db){
    res.send(db);
  })
});

//Get Most Recent Event
//TODO change to get events after today
router.get('/upcoming', function(req, res, next){
  connection.executeQuery("SELECT * FROM Events WHERE CreationDate = (SELECT MAX(CreationDate) as MostRecent FROM Events);", function(db){
    res.send(db);
  })
});


//Get Event by ID (Name)
router.get('/:id', function(req, res, next){
  event_id = req.params.id;
  connection.executeQuery("SELECT * FROM Execs WHERE Name='" + event_id + "';", function(db){
    res.send(db);
  })
});




module.exports = router;
