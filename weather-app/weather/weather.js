/**
 * Created by chexie on 4/24/17.
 */
const request = require("request");

var getWeither = function(latitude, longitude, callback) {
    request({url: "https://api.forecast.io/forecast/4a04d1c42fd9d32c97a2c291a32d5e2d/" + latitude + "," + longitude,
            json: true
    }, function(error, response, body) {
        if(error) {
            callback('Unable to connect to Forecast.io server.');
        } else if(response.statusCode === 400) {
            callback('Unable to fetch weather.');
        } else if (response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
    })
};

module.exports.getWeither = getWeither;