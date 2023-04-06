import { createServer } from 'http';
http.createServer((req, res) => {
        res.end('Hello world');
    })
    .listen(8080, () => {
        console.log('Server started at port 8080');
    }); 