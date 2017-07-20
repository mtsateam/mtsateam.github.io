var google = require('@google/maps');
var configuration = require('../configuration');

googleMapsClient = google.createClient({
  key: configuration.googleAPIKey
  }
);


//use place_id instead of long/lat
var geocodeAddress = function(address, callback) {
  googleMapsClient.geocode({
    address: address
  }, function (err, res) {
    if (!err) {
      callback(res.json.results[0].place_id)
    }
  })
}


exports.googleMapsClient = googleMapsClient;
exports.geocodeAddress=geocodeAddress;

