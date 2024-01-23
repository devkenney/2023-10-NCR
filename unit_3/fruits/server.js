const express = require('express');
const fruits = require('./models/fruits.js');
const app = express();

app.get('/fruits', (req, res) => {
  res.send(fruits);
});

app.get('/fruits/:index', (req, res) => {
  res.send(fruits[req.params.index]);
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});