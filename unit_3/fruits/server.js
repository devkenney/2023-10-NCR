const express = require('express');
const fruits = require('./models/fruits.js');
const app = express();

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) => {
  console.log('I run for all routes');
  next();
})

// INDUCES

// Index

app.get('/fruits', (req, res) => {
  res.render('Index', { fruits: fruits });
});

// New

app.get('/fruits/new', (req, res) => {
  res.render('New');
})

// Delete

// Update

// Create

app.post('/fruits', (req, res) => {
  if (req.body.readyToEat === 'on') {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  fruits.push(req.body)
  console.log(fruits)
  res.redirect('/fruits')
})

// Edit

// Show

app.get('/fruits/:index', (req, res) => {
  res.render('Show', {
    fruit: fruits[req.params.index]
  });
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});