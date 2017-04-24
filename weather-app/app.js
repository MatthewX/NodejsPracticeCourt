const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather')

const argv = yargs
    .options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true
    }
})
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.address, function (errorMessage, results) {
    if(errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(results.address);
        weather.getWeither(results.latitude, results.longitude, function(errorMessage, weatherResults) {
            if(errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(JSON.stringify(weatherResults, undefined, 2));
            }
        });
    }
});


