require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const fruits = require('./models/fruits.js');
const Fruit = require('./models/Fruit.js');
const methodOverride = require('method-override');
const app = express();


app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

mongoose.connect(process.env.MONGO_URI);
mongoose.connection.once('open', () => {
  console.log('connected to mongo!');
});

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.use((req, res, next) => {
  console.log('I run for all routes');
  next();
})

// Seed Route

app.get('/fruits/seed', (req, res) => {
  Fruit.insertMany([
    {
      name: 'grapefruit',
      color: 'pink',
      readyToEat: true
    },
    {
      name: 'grape',
      color: 'purple',
      readyToEat: false
    },
    {
      name: 'avocado',
      color: 'green',
      readyToEat: true
    }
  ])
    .then(createdFruits => res.redirect('/fruits'))
    .catch(err => console.error(err));
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

app.delete('/fruits/:id', (req, res) => {
  Fruit.deleteOne({ _id: req.params.id })
    .then(deleteInfo => {
      console.log(deleteInfo)
      res.redirect('/fruits')
    })
    .catch(err => console.error(err));
})

// Update

app.put('/fruits/:id', (req, res) => {
  if (req.body.readyToEat === 'on') {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  Fruit.updateOne({ _id: req.params.id }, req.body)
    .then(updateInfo => {
      console.log(updateInfo);
      res.redirect(`/fruits/${req.params.id}`)
    })
    .catch(err => console.error(err));
})

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

app.get('/fruits/:id/edit', (req, res) => {
  Fruit.findOne({ _id: req.params.id })
    .then(foundFruit => res.render('Edit',
      {
        fruit: foundFruit
      }))
    .catch(err => console.error(err));
})

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