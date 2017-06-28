var express = require('express');
var router = express.Router();
var db = require('../database/exec_db');
var connection = require('../database/connection')

//Get all execs
router.get('/', function(req, res, next){
  connection.executeQuery("SELECT * FROM communication;", function(db){
    console.log(db);
    res.send(db);
  })
});


//Get Exec by ID (Name)
router.get('/:id', function(req, res, next){
    exec_id = req.params.id;
    connection.executeQuery("SELECT * FROM communication WHERE Name='" + exec_id + "';", function(db){
        res.json(db);
    })
});


//TODO FINISH QUERY COMMAND
//Find by ID and update
router.put('/:id', function(req, res, next){
    exec_info = req.body;
    exec_id = req.params.id;
    connection.updateQuery("UPDATE communication SET ", function(db){
      res.json(db);
    });

})

//delete Exec
router.delete('/:id', function(req, res, next){
  exec_id = req.params.id;
  connection.executeQuery("DELETE FROM communication WHERE Name='"+exec_id+"';", function(db){
    res.json(db);
  })
})

module.exports = router;
