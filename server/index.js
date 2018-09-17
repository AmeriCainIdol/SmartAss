const express = require('express');
//dbhelpers object
const dbHelpers = require('../database/databasehelpers');
//api helpers object
const triviaHelpers = require('./trivia_api_helpers');
//access questions database
const questionsDB = require('../database/index');
//require cors
const cors = require('cors');


//morgan will intercept http requests and log them in terminal
const morgan = require('morgan');
//body parser
const bodyParser = require('body-parser');

const app = express();

//enable cors
app.use(cors());
//use the tiny version of morgan showing the http method and ping
app.use(morgan('tiny'));
//bodyParser config options
// parse application/x-www-form-urlencoded
app.use(express.static(__dirname + '/../front-end/dist'));

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())



let port = process.env.PORT || 3060;

//NOTE: UNCOMMENT FOR DEVELOPMENT
app.listen(port, function () {
  console.log(`listening on port ${port}`)
})


//NOTE: COMMENT THIS OUT FOR DEVELOPMENT
//THIS IS FOR DEPLOY
// app.listen(port, `142.93.13.248`)

//getting cors to work
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


//handler for signing up
app.post('/sign_up',
  (request, response) => {
    //take the info from the fields
    const username = request.body.username;
    const email = request.body.email;
    const password = request.body.passwordinput;

    //console.log('request inside post', request.body)

    const userObject = {
      username,
      email,
      password
    }

    //console.log(userObject);

    //save them to the database
    const newUserReadyForSaving = dbHelpers.userSignedUp(userObject);
    //console.log(newUserReadyForSaving);

    dbHelpers.saveUser(newUserReadyForSaving, response);
  });

//handler for submitting parameters for game
app.post('/gameCreation', (req, res) => {
  triviaHelpers.triviaHelpers.getQuestionsForCategoryAndDifficulty(req.body.category, req.body.difficulty, (err, res, body) => {
    if (err) {
      console.error(err);
    } else {
      const parsedBody = JSON.parse(body);
      parsedBody.results.forEach(question => {
        questionsDB.save({
          category: question.category,
          type: question.type,
          difficulty: question.difficulty,
          question: question.question,
          correct_answer: question.correct_answer,
          incorrect_answers: question.incorrect_answers
        })
      })
    }
  })
  res.sendStatus(201);
  res.end();
})

//get request to database to retrieve questions
app.get('/gameCreation', (req, res) => {
  questionsDB.find((err, data) => {
    if (err) {
      console.error(err);
    } else {
      const displayedQuestions = data.map(question => {
        console.log(question);
        return {
          category: question.category,
          difficulty: question.difficulty,
          question: question.question,
          correct_answer: question.correct_answer,
          incorrect_answers: question.incorrect_answers
        };
      })
      res.send(displayedQuestions);
    }
  })
})
//handler for changing the user stats that won the game
app.post('/gameover',
  (request, response) => {
    const userObjectThatWonTheGame = request.body
    //send the whole userObject to dbHelpers.updateUserAfterGame
    dbHelpers.updateUserAfterGame(userObjectThatWonTheGame);
    response.status(201, 'OK');
    console.log(response.body);
    response.end();
  });




