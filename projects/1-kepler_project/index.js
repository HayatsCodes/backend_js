function print(data) {
    console.log(data);
}

const csv = require('csv-parse');
print(csv.parse())
const fs = require('fs');

const results = [];

fs.createReadStream('kepler_data.csv')
    .pipe(csv.parse({
        comment: '#',
        colums: true,
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
