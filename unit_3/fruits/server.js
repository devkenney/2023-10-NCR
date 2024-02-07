/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
require('dotenv').config();
require('./config/connection.js');
const express = require('express');
const path = require('path');
const Fruit = require('./models/Fruit.js');
const methodOverride = require('method-override');
const morgan = require('morgan');

/////////////////////////////////////////////////
// Create our Express Application Object Bind express-react-views templating engine
/////////////////////////////////////////////////
const app = express();
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

/////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////
app.use(morgan('tiny')); // logging
app.use(express.urlencoded({ extended: true })); // parses urlencoded request bodies
app.use(methodOverride('_method')); // override for put and delete requests
app.use(express.static('public'));

////////////////////////////////////////////
// Routes
////////////////////////////////////////////
app.get('/', (req, res) => {
  res.send('your server is running... better catch it.')
})

// Seed Route

app.get('/fruits/seed', (req, res) => {
  const startFruits = [
    { name: "Orange", color: "orange", readyToEat: false },
    { name: "Grape", color: "purple", readyToEat: false },
    { name: "Banana", color: "orange", readyToEat: false },
    { name: "Strawberry", color: "red", readyToEat: false },
    { name: "Coconut", color: "brown", readyToEat: false },
  ];
  Fruit.deleteMany({})
    .then(data => {
      Fruit.insertMany(startFruits)
        .then(createdFruits => res.redirect('/fruits'))
        .catch((err) => {
          console.error(err)
          res.status(400).json({ error })
        });
    })
    .catch((err) => {
      console.error(err)
      res.status(400).json({ error })
    });
});

// INDUCES

// Index

app.get('/fruits', (req, res) => {
  Fruit.find({})
    .then((allFruits) => {
      res.render('Index', { fruits: allFruits });
    })
    .catch((err) => {
      console.error(err)
      res.status(400).json({ error })
    });
});

// New

app.get('/fruits/new', (req, res) => {
  res.render('New');
});

// Delete

app.delete('/fruits/:id', (req, res) => {
  Fruit.deleteOne({ _id: req.params.id })
    .then(deleteInfo => {
      console.log(deleteInfo)
      res.redirect('/fruits')
    })
    .catch((err) => {
      console.error(err)
      res.status(400).json({ error })
    });
})

// Update

app.put('/fruits/:id', (req, res) => {
  if (req.body.readyToEat === 'on') {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  Fruit.updateOne({ _id: req.params.id }, req.body, { new: true })
    .then(updateInfo => {
      console.log(updateInfo);
      res.redirect(`/fruits/${req.params.id}`)
    })
    .catch((err) => {
      console.error(err)
      res.status(400).json({ error })
    });
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
    .catch((err) => {
      console.error(err)
      res.status(400).json({ error })
    });
});

// Edit

app.get('/fruits/:id/edit', (req, res) => {
  Fruit.findOne({ _id: req.params.id })
    .then(foundFruit => res.render('Edit',
      {
        fruit: foundFruit
      }))
      .catch((err) => {
        console.error(err)
        res.status(400).json({ error })
      });
})

// Show

app.get('/fruits/:id', (req, res) => {
  Fruit.findOne({ _id: req.params.id })
    .then((foundFruit) => {
      res.render('Show', {
        fruit: foundFruit
      });
    })
    .catch((err) => {
      console.error(err)
      res.status(400).json({ error })
    });
});

//////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});