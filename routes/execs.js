var express = require('express');
var router = express.Router();
var connection = require('../connection/database')

//Get all execs
router.get('/', function(req, res, next){
  // connection.executeQuery("SELECT * FROM Execs WHERE Position='Webmaster';", function(db){
  //   res.send(db);
  // })

  connection.executeQuery("SELECT * FROM Execs ORDER BY Team DESC;", function(db){
    res.send(db);
  })
});


//Get teams list
router.get('/teams', function(req, res, next){
  connection.executeQuery("SELECT Team FROM Execs GROUP BY Team", function(db){
    res.send(db);
  })
});

//Get Exec by Team ID (Team)
router.get('/teams/:id', function(req, res, next){
  team_id = req.params.id;
  connection.executeQuery("SELECT * FROM Execs WHERE Team='" + team_id + "';", function(db){
    res.send(db);
  })
});

module.exports = router;
