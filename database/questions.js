const mongoose = require('mongoose');
//const config = require('../config/config')†

var db = mongoose.connection;

//NOTE: uncomment to drop database
mongoose.connect('mongodb://localhost/questions');

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
  const newQuestions = new Questions(data);
  newQuestions.save(err => {
    if (err) console.error(err);
  })
}

const find = callback => {
  query
}


module.exports.Questions = Questions;
module.exports.save = save;
module.exports.find = find;
