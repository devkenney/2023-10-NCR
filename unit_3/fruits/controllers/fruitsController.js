////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require('express');
const Fruit = require('../models/Fruit');

/////////////////////////////////////////
// Create Route
/////////////////////////////////////////

const router = express.Router();

////////////////////////////////////////
// Router Middleware
////////////////////////////////////////

router.use((req, res, next) => {
  if (req.session.loggedIn) {
    next();
  } else {
    res.redirect('/users/login')
  }
})

/////////////////////////////////////////
// Routes
/////////////////////////////////////////

// Seed Route

router.get('/seed', (req, res) => {
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

router.get('/', (req, res) => {
  Fruit.find({ username: req.session.username })
    .then((allFruits) => {
      res.render('Index', { fruits: allFruits });
    })
    .catch((err) => {
      console.error(err)
      res.status(400).json({ error })
    });
});

// New

router.get('/new', (req, res) => {
  res.render('New');
});

// Delete

router.delete('/:id', (req, res) => {
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

router.put('/:id', (req, res) => {
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

router.post('/', (req, res) => {
  if (req.body.readyToEat === 'on') {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  req.body.username = req.session.username;
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

router.get('/:id/edit', (req, res) => {
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

router.get('/:id', (req, res) => {
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

//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router;