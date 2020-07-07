const express = require('express');
const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const serveStatic = require('serve-static');
const app = express();

const basicAuth = require('express-basic-auth')

app.use(basicAuth({
  users: { 'karl': 'melitta' },
  challenge: true,
  realm: 'foo',
}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/dist');
});

app.use(serveStatic(__dirname + '/dist'));

const port = process.env.PORT || 8081;

app.listen(port);

console.log(`server started ${port}`);
