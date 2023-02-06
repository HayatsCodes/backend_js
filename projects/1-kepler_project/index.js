const { print } = require('../print')
const csv = require('csv-parse');
const fs = require('fs');

function isHabitablePlanet(planet) {
    return planet['koi_disposition'] === 'CONFIRMED' 
}

const habitablePlanets = [];

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
        console.log(err);
    })
    .on('end', () => {
        console.log(habitablePlanets);
        console.log('done');
    });
