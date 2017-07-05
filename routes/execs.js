var express = require('express');
var router = express.Router();
var connection = require('../database/connection')
var isEqual = require('lodash.isequal');

//Get all execs
router.get('/', function(req, res, next){
  connection.executeQuery("SELECT * FROM Execs WHERE Name='Tiffany Wang';", function(db){
    console.log(db);
    res.send(db);
  })
});


//Get teams list
router.get('/teams', function(req, res, next){
  connection.executeQuery("SELECT Team FROM Execs", function(db){
    var database = [];
    database.push(db[0]);
    db.forEach(function(new_team){
      var i, existing_team;
      for(i = 0; i < database.length ; i++) {
        if(JSON.stringify(database[i]) === JSON.stringify(new_team)) {
          existing_team = true;
          break
        }
      }
      if(!existing_team) database.push(new_team)
    })
    res.send(database);
  })
});

//Get Exec by Team ID (Team)
router.get('/teams/:id', function(req, res, next){
  team_id = req.params.id;
  connection.executeQuery("SELECT * FROM Execs WHERE Team='" + team_id + "';", function(db){
    res.send(db);
  })
});

//TODO FINISH QUERY COMMAND
//Find by ID and update
router.put('/:id', function(req, res, next){
    exec_info = req.body;
    exec_id = req.params.id;
    connection.updateQuery("UPDATE Communication SET ", function(db){
      res.json(db);
    });

});

//Get Exec by ID (Name)
router.get('/:id', function(req, res, next){
  exec_id = req.params.id;
  connection.executeQuery("SELECT * FROM Execs WHERE Name='" + exec_id + "';", function(db){
    res.send(db);
  })
});

//delete Exec
router.delete('/:id', function(req, res, next){
  exec_id = req.params.id;
  connection.executeQuery("DELETE FROM Communication WHERE Name='"+exec_id+"';", function(db){
    res.json(db);
  })
});

module.exports = router;
