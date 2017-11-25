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
