var express = require('express');
var router = express.Router();
var connection = require('../connection/database')

//Get all events
router.get('/', function(req, res, next){
  connection.executeQuery("SELECT *, CONVERT(varchar(50), Start, 107) AS StartDate, CONVERT(varchar(50), Start, 108) AS StartTime, CONVERT(varchar(50), Fin, 107) AS EndDate, CONVERT(varchar(50), Fin, 107) AS EndTime FROM Events ORDER BY CreationDate;", function(db){
    res.send(db);
  })
});

//Get Thumbnail Events
router.get('/thumbnail', function(req, res, next){
  connection.executeQuery("SELECT TOP 4 *, CONVERT(varchar(50), Start, 107) AS StartDate, CONVERT(varchar(50), Start, 108) AS StartTime, CONVERT(varchar(50), Fin, 107) AS EndDate, CONVERT(varchar(50), Fin, 107) AS EndTime FROM Events ORDER BY CreationDate;", function(db){
    res.send(db);
  })
});

//Get all events after Today
//TODO change to get events after today
router.get('/upcoming', function(req, res, next){
  connection.executeQuery("SELECT *, CONVERT(varchar(50), Start, 107) AS StartDate, CONVERT(varchar(50), Start, 108) AS StartTime, CONVERT(varchar(50), Fin, 107) AS EndDate, CONVERT(varchar(50), Fin, 107) AS EndTime FROM Events WHERE Start>GETDATE();", function(db){
    res.send(db);
  })
});


//Get Event by ID (Name)
router.get('/:id', function(req, res, next){
  event_id = req.params.id;
  connection.executeQuery("SELECT *, CONVERT(varchar(50), Start, 107) AS StartDate, CONVERT(varchar(50), Start, 108) AS StartTime, CONVERT(varchar(50), Fin, 107) AS EndDate, CONVERT(varchar(50), Fin, 107) AS EndTime FROM Execs WHERE Name='" + event_id + "';", function(db){
    res.send(db);
  })
});



module.exports = router;
