// const http = require('http');

// const req = http.request('http://www.google.com', (res) => {
//     res.on('data', (chunk) => {
//         console.log(`Data chunk: ${chunk}`);
//     });
//     res.on('end', () => {
//         console.log('No more data');
//     });
// });

// req.end();

const {get} = require('https');

get('https://www.google.com', (res) => {
    res.on('data', (chunk) => {
        console.log(`Data chunk: ${chunk}`);
    });
    res.on('end', () => {
        console.log('No more data');
    });
});

// Node.js Caching:
// Node stores loaded modules in memory so that they wouldn't be a need to reload it again.

// index.js:
// It's a special case in node.js that allows a folder to act as a module