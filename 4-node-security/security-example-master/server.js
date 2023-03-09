const fs = require('fs');
const path = require('path');
const https = require('https');
const express = require('express');
const helmet = require('helmet');
// const passport = require('passport');
// const { Strategy } = require('passport-google-oauth20');
// const cookieSession = require('cookie-session');
// const { verify } = require('crypto');


const PORT = 3000;

const app = express();

app.use(helmet());

function checkLoggedIn() {
  const isLoggedIn = true;
  if (!isLoggedIn) {
    return res.status(401).json({
      error: 'You must login!',
    });
  }
  next();
}

app.get('/auth/google', (req, res) => {});
app.get('/auth/google/callback', (req, res) => {});

app.get('/secret', checkLoggedIn, (req, res) => {
  return res.send('Your personal secret value is 42!');
});


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})

https.createServer({
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem'),
}, app).listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});