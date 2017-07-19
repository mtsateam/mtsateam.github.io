var express = require('express');
var router = express.Router();
var connection = require('../database/connection')

//Get all sponsors
router.get('/', function(req, res, next){
  connection.executeQuery("SELECT * FROM Sponsors ORDER BY Tier;", function(db){
    res.send(db);
  })
});


//Get tier list
router.get('/tier/:id', function(req, res, next){
  tier_id = req.params.id;
  connection.executeQuery("SELECT * FROM Sponsors WHERE Tier='" + tier_id + "';", function(db){
    res.send(db);
  })
});

//Get Sponsor of the week
router.get('/week', function(req, res, next){
  connection.executeQuery("SELECT * FROM Sponsors WHERE SponsorOfTheWeek='true';", function(db){
    res.send(db);
  })
});

//Get Sponsor by Sponsor ID (Name)
router.get('/:id', function(req, res, next){
  sponsor_id = req.params.id;
  connection.executeQuery("SELECT * FROM Sponsors WHERE Name='" + sponsor_id + "';", function(db){
    res.send(db);
  })
});



//TODO FINISH QUERY COMMAND
//Find by ID and update
router.put('/:id', function(req, res, next){
  exec_info = req.body;
  event_id = req.params.id;
  connection.updateQuery("UPDATE Communication SET ", function(db){
    res.json(db);
  });

});

//Get Exec by ID (Name)
router.get('/:id', function(req, res, next){
  event_id = req.params.id;
  connection.executeQuery("SELECT * FROM Execs WHERE Name='" + event_id + "';", function(db){
    res.send(db);
  })
});

//delete Exec
router.delete('/:id', function(req, res, next){
  event_id = req.params.id;
  connection.executeQuery("DELETE FROM Communication WHERE Name='"+event_id+"';", function(db){
    res.json(db);
  })
});

module.exports = router;
