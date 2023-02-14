const csv = require('csv-parse');
const fs = require('fs');

function isHabitablePlanet(planet) {
    return planet['koi_disposition'] === 'CONFIRMED' &&
        planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 && planet['koi_prad'] < 1.6;
}

const habitablePlanets = [];

function loadPlanetsData() {
    return new Promise((resolve, reject) => {

    })
}

module.exports = {
    planets: habitablePlanets,
}