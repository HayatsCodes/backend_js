const { send } = require('./request');

function request(url, data) {
    send(url, data);
    read();
}