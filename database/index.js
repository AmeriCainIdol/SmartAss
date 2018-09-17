const mongoose = require('mongoose');
//const config = require('../config/config')†

var db = mongoose.connection;

//NOTE: uncomment to drop database
// mongoose.connect('mongodb://localhost/fetcher', () => {
//   mongoose.connection.db.dropDatabase();
// })


//FIXME: remember to add a process.env here for mlabs deploy
const mongoDB = `mongodb://user:tron22@ds153552.mlab.com:53552/smartass`;
//process.env.MONGODB_URI;
//mongoose.Promise = global.Promise;
mongoose.connect(mongoDB, {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE,
  //deprecation warning fix12
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

// const questionsSchema = mongoose.Schema({
//   category: String,
//   type: String,
//   difficulty: String,
//   question: String,
//   correct_answer: String,
//   incorrect_answers: Array
// })

// const Questions = mongoose.model('Questions', questionsSchema);

// const emptyThenInsert = (db) =>{
//   questionsSchema.remove({}, function (err) {
//     if (err) console.log(err);
//     questionsSchema.collection.insert(db, function (err, data) {
//       if (err) console.log(err);
//       questionsSchema.collection.find({}, function (err, data) {
//         if (err) console.log(err);
//       });
//       process.exit(1);
//     });
//   });
// }
// const save = data => {
//   mongoose.connection.db.dropCollection('questions', (err, result)=> {

//   })
//   const newQuestions = new Questions(data);

//   newQuestions.save(err => {
//     if (err) console.error(err);
//   })
// }

const User = mongoose.model('User', userSchema);
// const queryQuestions = Questions.find();
const queryUser = User.find();

// const findQuestions = callback => {
//   queryQuestions.limit(10).select('category question difficulty question correct_answer incorrect_answers').exec(callback);
// }

const findUser = callback => {
  queryUser.limit(10).select('username averageWinRate wins losses').exec(callback);
}

// module.exports.save = save;
module.exports.User = User;
// module.exports.Questions = Questions;
// module.exports.findQuestions = findQuestions;
module.exports.findUser = findUser;
// module.exports.emptyThenInsert = emptyThenInsert;
