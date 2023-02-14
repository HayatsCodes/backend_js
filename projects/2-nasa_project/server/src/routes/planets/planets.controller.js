const planets = require('../../models/planets.model');

console.log('planets: ', planets);

function getAllPlanets(req, res) {
    return res.status(200).json(planets);
}

module.exports = {
    getAllPlanets,
}