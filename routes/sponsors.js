var express = require('express');
var router = express.Router();
var children_router = express.Router({mergeParams: true});
var database = require('../connection/database')
var google = require('../connection/google-maps')

//cascade the routers
router.use('/:id', children_router);

//Get all sponsors
router.get('/', function(req, response, next){
  database.executeQuery("SELECT * FROM Sponsors ORDER BY Tier;", function(db){
    generateLocationID(db, function(sponsorList){
      response.send(sponsorList);
    })
  })
});

var generateLocationID = function(sponsorList, callback){
  var index = 0;
  sponsorList.forEach(function(sponsor){
    google.addressIDCoder(sponsor.Address, function(ID){
      sponsor.locationID = ID;
      if(index == sponsorList.length - 1) {
        callback(sponsorList);
      }
      index++;
    })
  })
}

//Get tier list
router.get('/tier/:id', function(req, res, next){
  tier_id = req.params.id;
  database.executeQuery("SELECT * FROM Sponsors WHERE Tier='" + tier_id + "';", function(db){
    res.send(db);
  })
});

//Get Sponsor of the week
router.get('/week', function(req, res, next){
  database.executeQuery("SELECT * FROM Sponsors WHERE SponsorOfTheWeek='true';", function(db){
    res.send(db);
  })
});


//Get Sponsor by Sponsor ID (Name)
router.get('/:id', function(req, res, next){
  sponsor_id = req.params.id;
  database.executeQuery("SELECT * FROM Sponsors WHERE Name='" + sponsor_id + "';", function(db){
    res.send(db);
  })
});

//Get Specific sponsor AddressID
children_router.get('/locationID', function(req, res, next){
  sponsor_id = req.params.id;
  database.executeQuery("SELECT Address FROM Sponsors WHERE Name='" + sponsor_id + "';", function(db){
    google.addressIDCoder(db[0].Address, function(address){
      res.send(address);
    })
  })
})

//TODO FINISH QUERY COMMAND
//Find by ID and update
router.put('/:id', function(req, res, next){
  exec_info = req.body;
  event_id = req.params.id;
  database.updateQuery("UPDATE Communication SET ", function(db){
    res.json(db);
  });

});

//Get Exec by ID (Name)
router.get('/:id', function(req, res, next){
  event_id = req.params.id;
  database.executeQuery("SELECT * FROM Execs WHERE Name='" + event_id + "';", function(db){
    res.send(db);
  })
});

//delete Exec
router.delete('/:id', function(req, res, next){
  event_id = req.params.id;
  database.executeQuery("DELETE FROM Communication WHERE Name='"+event_id+"';", function(db){
    res.json(db);
  })
});




module.exports = router ;

