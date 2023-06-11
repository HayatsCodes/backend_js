const io = require('socket.io-client');

const socket = io('http://localhost:3000');

socket.on('connect', () => {
  console.log('Connected to the server');
});

socket.on('message', (message) => {
  console.log(`Server: ${message}`);
});

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt('You: ');
rl.prompt();

rl.on('line', (line) => {
  // Send user input to the server
  socket.emit('message', line);
  rl.prompt();
});

socket.on('disconnect', () => {
  console.log('Disconnected from the server');
});
