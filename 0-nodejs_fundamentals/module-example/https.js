const { send } = require('./request');
const { read } = require('./response');

function request(url, data) {
    send(url, data);
    return read();
}

