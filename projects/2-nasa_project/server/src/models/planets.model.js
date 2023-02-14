const csv = require('csv-parse');
const fs = require('fs');

function isHabitablePlanet(planet) {
    return planet['koi_disposition'] === 'CONFIRMED' &&
        planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 && planet['koi_prad'] < 1.6;
}

const habitablePlanets = [];

function loadPlanetsData() {
    return new Promise((resolve, reject) => {
        fs.createReadStream('kepler_data.csv')
    .pipe(csv.parse({
        comment: '#',
        columns: true,
    }))
    .on('data', (data) => {
        if (isHabitablePlanet(data)) {
            habitablePlanets.push(data);
        }
    })
    .on('error', (err) => {
        print(err);
    }) 
    .on('end', () => {
        console.log(`${habitablePlanets.length} habitable planets found!`);
        resolve();
    });

    })
}

module.exports = {
    planets: habitablePlanets,
}