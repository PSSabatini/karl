const express = require('express');
const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const serveStatic = require('serve-static');
const app = express();

// eslint-disable-next-line prefer-template
app.use(serveStatic(__dirname + "/dist"));

const port = process.env.PORT || 8080;

app.listen(port);

console.log(`server started ${port}`);
