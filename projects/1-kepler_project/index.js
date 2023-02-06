const { print } = require('../print')
const csv = require('csv-parse');
const fs = require('fs');

function isHabitablePlanet(planet) {
    return planet['koi_disposition'] === 'CONFIRMED'
}

const results = [];

fs.createReadStream('kepler_data.csv')
    .pipe(csv.parse({
        comment: '#',
        columns: true,
    }))
    .on('data', (data) => {
        results.push(data);
    })
    .on('error', (err) => {
        console.log(err);
    })
    .on('end', () => {
        console.log(results);
        console.log('done');
    });
