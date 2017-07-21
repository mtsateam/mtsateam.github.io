var google = require('@google/maps');
var configuration = require('../configuration');

var googleMapsClient = google.createClient({
    key: configuration.googleAPIKey
  }
);


//use place_id instead of long/lat
exports.addressIDCoder = function(address, callback) {
  console.log("addressIDCoder called")
  googleMapsClient.geocode({
    address: address
  }, function (err, res) {
    if (!err) {
      console.log(res.json.results[0].place_id)
      callback(res.json.results[0].place_id);
    }
  })
}


