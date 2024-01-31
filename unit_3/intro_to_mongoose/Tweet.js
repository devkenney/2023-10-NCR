const { Schema, model } = require('mongoose');

const tweetSchema = new Schema(
  {
    title: String,
    body: String,
    author: String,
    likes: { type: Number, default: 0 },
    sponsored: { type: Boolean, default: false }
  }, {
    timestamps: true
  }
);

const Tweet = model('Tweet', tweetSchema);

module.exports = Tweet;