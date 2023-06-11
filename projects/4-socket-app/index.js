const express = require('express');
const http = require('http');
const ioServer = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = ioServer(server, {cors: {origin: "*"}});

app.set('view engine', 'ejs');

app.get('/home', (req, res) => {
    res.render('home');
});

server.listen(3001, () => {
    console.log('Server is running on port 3001'); 
});

io.on('connection', (socket) => {
    console.log(`User: ${socket.id}`);
    socket.on('message', (data) => {
        console.log(data)
        io.emit('message', data)
    });
});