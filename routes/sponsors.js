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
    google.generateLocationID(db, function(sponsorList){
      response.send(sponsorList);
    })
  })
});

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



module.exports = router ;

