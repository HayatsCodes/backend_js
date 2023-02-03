function encrypt(data) {
    return `encrypted ${data}`;
}

function send(url, data) {
    const encryptedData = encrypt(data);
    console.log(`sending ${url} ${encryptedData}`)
}

module.exports = {
    send: send,
}

// console.log(module);