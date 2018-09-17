
const mongoose = require('mongoose');
//const config = require('../config/config')†
const db = mongoose.connection;
 //NOTE: uncomment to drop database
const mongoDB = `mongodb://user:tron22@ds153552.mlab.com:53552/smartass`;
//process.env.MONGODB_URI;
//mongoose.Promise = global.Promise;
mongoose.connect(mongoDB, {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE,
  //deprecation warning fix12
  useNewUrlParser: true,
});
 //FIXME: remember to add a process.env here for mlabs deploy
//process.env.MONGODB_URI;
//mongoose.Promise = global.Promise;
//deprecation warning fix
mongoose.set('useCreateIndex', true);
db.on('error', function () {
  console.log('mongoose connection error:');
});
db.once('open', function () {
  console.log('mongoose connected successfully');
});
const questionsSchema = mongoose.Schema({
  category: String,
  type: String,
  difficulty: String,
  question: String,
  correct_answer: String,
  incorrect_answers: Array
})

const Questions = mongoose.model('Questions', questionsSchema);
const save = data => {
  mongoose.connection.db.dropCollection('questions')
  const newQuestions = new Questions(data);
  newQuestions.save(err => {
    if (err) console.error(err);
  })
}

const query = Questions.find();

const findQuestions = callback => {
  query.limit(10).select('category question difficulty question correct_answer incorrect_answers').exec(callback);
}

module.exports.Questions = Questions;
module.exports.save = save;
module.exports.findQuestions = findQuestions;