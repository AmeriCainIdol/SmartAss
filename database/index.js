const mongoose = require('mongoose');
const config = require('../config/config')

var db = mongoose.connection;

//NOTE: uncomment to drop database
// mongoose.connect('mongodb://localhost/fetcher', () => {
//   mongoose.connection.db.dropDatabase();
// })

//FIXME: remember to add a process.env here for mlabs deploy
const mongoDB = process.env.MLAB;
//process.env.MONGODB_URI;
//mongoose.Promise = global.Promise;
mongoose.connect(mongoDB, {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE,
  //deprecation warning fix
  useNewUrlParser: true,
});
//deprecation warning fix

mongoose.set('useCreateIndex', true);


db.on('error', function () {
  console.log('mongoose connection error:');
});

db.once('open', function () {
  console.log('mongoose connected successfully');
});

const userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  userEmail: String,
  userPassword: String,
  wins: Number,
  losses: Number,
  gamesPlayed: Number,
  averageWinRate: Number,
});


const User = mongoose.model('User', userSchema);

module.exports.User = User;