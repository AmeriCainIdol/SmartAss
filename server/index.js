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
app.use(express.static(__dirname + '/../front-end/src'));

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())



let port = process.env.PORT || 3060;

app.listen(port, function () {
  console.log(`listening on port ${port}`)
})

//handler for signing up
app.post('/signup',
  () => {
    //     take the info from the fields
    //     save them to the database
    //     redirect user to login page

  });

app.get('/', (req, res) => {
  res.send('works')
})
// handler for logging in
// app.get('/login',
//   () => {
//     search database for user
//     authenticate user session
//     redirect to game page
  // })

