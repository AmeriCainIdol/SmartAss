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

const questionsSchema = mongoose.Schema({
<<<<<<< HEAD

=======
  category: String,
  type: String,
  difficulty: String,
  question: String,
  correct_answer: String,
  incorrect_answers: Array
>>>>>>> 46846f830dc661a1b62821148fd7cbf327940dd5
})

const Questions = mongoose.model('Questions', questionsSchema);

const save = data => {
  const newQuestions = new Questions(data);
  newQuestions.save(err => {
    if (err) console.error(err);
  })
}

const query = Questions.find();

const find = callback => {
  query.limit(10).select('category question difficulty question correct_answer incorrect_answers').exec(callback);
}
const User = mongoose.model('User', userSchema);

module.exports.save = save;
module.exports.User = User;
module.exports.Questions = Questions;
module.exports.find = find;