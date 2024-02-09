///////////////////////////////////////
// Import Dependencies
///////////////////////////////////////
const mongoose = require('../config/connection');
const Fruit = require('./Fruit');
const startFruits = require('./seedData');

///////////////////////////////////////////
// Seed Code
////////////////////////////////////////////

// save the connection in a variable
const db = mongoose.connection;

// Make sure the code is not run until connected
db.on('open', () => {

  ///////////////////////////////////////////////
  // Write your Seed Code Below
  //////////////////////////////////////////////

  // Run any database queries in this function

  // Delete all fruits
  Fruit.deleteMany({})
    .then(deletedFruits => {
      // add the starter fruits
      Fruit.insertMany(startFruits)
        .then(createdFruits => {
          console.log(createdFruits);
          db.close();
        })
        .catch(err => {
          console.error(err);
          db.close();
        })
    })
    .catch(err => {
      console.error(err);
      db.close();
    });
});