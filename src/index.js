var uniqueRandomArray = require('unique-random-array');
var harvardHouses = require('./harvard-houses.json');

module.exports = {
	all: harvardHouses,
	random: uniqueRandomArray(harvardHouses)
};
