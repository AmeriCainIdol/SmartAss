const express = require('express');
//morgan will intercept http requests and log them in terminal
const morgan = require('morgan');
//body parser
const bodyParser = require('body-parser');

const app = express();
//use the tiny version of morgan showing the http method and ping
app.use(morgan('tiny'));
//bodyParser config options
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())



let port = process.env.PORT || 3030;

app.listen(app, function () {
  console.log(`listening on port ${port}`)
})

//handler for signing up
app.post('/signup',
  () => {
    //take the info from the fields
    //save them to the database
    //redirect user to login page

  });

//handler for logging in
app.get('/login',
  () => {
    //search database for user
    //authenticate user session
    //redirect to game page
  })

