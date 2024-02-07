/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
require('dotenv').config();
require('./config/connection.js');
const express = require('express');
const methodOverride = require('method-override');
const morgan = require('morgan');

/////////////////////////////////////////////////
// Create our Express Application Object Bind
// express-react-views templating engine
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

const fruitsController = require('./controllers/fruitsController.js');
app.use('/fruits', fruitsController);

const usersController = require('./controllers/usersController.js');
app.use('/users', usersController);

//////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////
const PORT = process.env.PORT
app.listen(PORT || 3000, () => {
  console.log(`listening on port ${PORT}`);
});