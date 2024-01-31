require('dotenv').config();

const mongoose = require('mongoose');
const Tweet = require('./Tweet.js');

const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

mongoose.connect(mongoURI);

db.on('error', err => console.log(err.message + ' is mongod not running?'));
db.on('open', () => console.log('mongo connected!'));
db.on('close', () => console.log('mongo disconnected!'));

const myFirstTweet = {
  title: "Deep Thoughts",
  body: "Friends, I am the realest coder alive",
  author: "Devin"
};

const manyTweets = [
  {
    title: "Deep Thoughts",
    body: "Friends, I am the realest coder alive",
    author: "Arthur",
  },
  {
    title: "Sage Advice",
    body: "Friends, I am awesome and you are too",
    author: "Arthur",
    likes: 20,
  },
  {
    title: "Is TI the Jadakiss of the South",
    body: "TI is severely underrated and we need to fix that expeditiously",
    author: "Arthur",
    likes: 40,
  },
  {
    title: "Crypto",
    body: "Friends, I have spent $2300 to be one of the first people to own a random jpeg and that makes me cool",
    author: "Arthur",
    likes: 162,
  },
  {
    title: "Confusion",
    body: "Friends, why do you just respond with the word `dislike`? Surely you mean to click the like button?",
    author: "Arthur",
    likes: -100,
  },
  {
    title: "Vespa",
    body: "Friends, my Vespa has been upgraded to run on old french fry oil. Its top speed is now 11 mph",
    author: "Arthur",
    likes: 2,
  },
  {
    title: "Licensed",
    body: "Friends, I am now officially licensed to teach yogalates. Like this to get 10% off a private lesson",
    author: "Arthur",
    likes: 3,
  },
  {
    title: "Water",
    body: "Friends, I have been collecting rain water so I can indulge in locally sourced raw water. Ask me how",
    author: "Arthur",
  },
];

// Tweet.create(myFirstTweet)
//   .then(createdTweet => console.log(createdTweet))
//   .catch(error => console.error(error))
//   .finally(() => db.close())

// Tweet.insertMany(manyTweets)
//   .then(tweets => console.log(tweets))
//   .catch(error => console.error(error))
//   .finally(() => db.close());

// Tweet.findOne({})
//   .then(allTweets => console.log(allTweets))
//   .catch(error => console.error(error))
//   .finally(() => db.close());

// Tweet.find({ likes: { $gte: 20 } })
//   .then(tweets => console.log(tweets))
//   .catch(error => console.error(error))
//   .finally(() => db.close());

// Tweet.deleteOne({ title: "Deep Thoughts" })
//   .then(deleteInfo => console.log(deleteInfo))
//   .catch(error => console.error(error))
//   .finally(() => db.close());

// Tweet.updateOne(
//   { title: 'Vespa' },
//   { sponsored: true },
//   { new: true }
// )
//   .then(updateInfo => console.log(updateInfo))
//   .catch(error => console.error(error))
//   .finally(() => db.close());

Tweet.countDocuments({ likes: { $gte: 20 } })
  .then(count => console.log(count))
  .catch(error => console.error(error))
  .finally(() => db.close());