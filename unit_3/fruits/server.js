/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
require('dotenv').config();
require('./config/connection.js');
const express = require('express');
const middleware = require('./utils/middleware.js');

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
middleware(app);

////////////////////////////////////////////
// Routes
////////////////////////////////////////////
app.get('/', (req, res) => {
  res.render("Home.jsx");
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