const express = require('express');
//dbhelpers object
const dbHelpers = require('../database/databasehelpers').dbHelpers;
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

app.listen(port, function () {
  console.log(`listening on port ${port}`)
})

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

    console.log(userObject);

    //save them to the database
    const newUserReadyForSaving = dbHelpers.userSignedUp(userObject);
    console.log(newUserReadyForSaving);
    dbHelpers.saveUser(newUserReadyForSaving);

    //redirect user to login page
    response.status(201, 'OK');
    response.end();
  });


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

app.get('/', (request, response) => {
  res.send('works')

})


// handler for logging in
// app.get('/login', (req, res) => {
//   res.render('login');
    // search database for user
    // authenticate user session
    // redirect to game page
  // })

