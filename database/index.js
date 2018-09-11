const { Mongoclient } = require('mongodb');
const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost:27017';
mongoose.connect(mongoUri);

const userSchema = mongoose.Schema({
  id: Number,
  username: String,
  wins: Number,
  losses: Number,
  gamesPlayed: Number
});