var google = require('@google/maps');
var configuration = require('../configuration');

var googleMapsClient = google.createClient({
    key: configuration.googleAPIKey
  }
);


//use place_id instead of long/lat
var addressIDCoder = function(address, callback) {
  googleMapsClient.geocode({
    address: address
  }, function (err, res) {
    if (!err) {
      callback(res.json.results[0].geometry.location);
    }
  })
}

var generateLocationID = function(jsonArray, callback){
  var index = 0;
  jsonArray.forEach(function(jsonObject){
    addressIDCoder(jsonObject.Address, function(ID){
      jsonObject.locationID = ID;
      if(index == jsonArray.length - 1) {
        callback(jsonArray);
      }
      index++;
    })
  })
}


exports.addressIDCoder = addressIDCoder;
exports.generateLocationID = generateLocationID;


