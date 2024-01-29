require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const fruits = require('./models/fruits.js');
const Fruit = require('./models/Fruit.js');
const app = express();

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.once('open', () => {
  console.log('connected to mongo!');
});

app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) => {
  console.log('I run for all routes');
  next();
})

// INDUCES

// Index

app.get('/fruits', (req, res) => {
  Fruit.find({})
    .then((allFruits) => {
      res.render('Index', { fruits: allFruits });
    })
    .catch((err) => console.error(err));
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
  Fruit.create(req.body)
    .then((createdFruit) => {
      res.redirect('/fruits')
    })
    .catch((err) => console.error(err));
});

// Edit

// Show

app.get('/fruits/:id', (req, res) => {
  Fruit.findOne({ _id: req.params.id })
    .then((foundFruit) => {
      res.render('Show', {
        fruit: foundFruit
      });
    })
    .catch(err => console.error(err))
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});