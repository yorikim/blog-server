+require('babel-register');

const result = require('./render').default;
const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send(result);
});

app.listen(3005);
