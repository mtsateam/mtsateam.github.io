var google = require('@google/maps');
var configuration = require('../../configuration');

var googleMapsClient = google.createClient({
    key: configuration.googleAPIKey
  }
);


//use place_id instead of long/lat
var addressIDCoder = function(address) {
  googleMapsClient.geocode({
    address: address
  }, function (err, res) {
    if (!err) {
      return res.json.results[0].place_id;
    }
  })
}


module.exports = addressIDCoder();



