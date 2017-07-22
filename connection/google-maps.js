var google = require('@google/maps');
var configuration = require('../configuration');

var googleMapsClient = google.createClient({
    key: configuration.googleAPIKey
  }
);


//use place_id instead of long/lat
exports.addressIDCoder = function(address, callback) {
  googleMapsClient.geocode({
    address: address
  }, function (err, res) {
    if (!err) {
      callback(res.json.results[0].geometry.location);
    }
  })
}


