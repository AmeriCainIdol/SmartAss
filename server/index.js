const express = require('express');

const app = express();

let port = process.env.PORT || 3030;

app.listen(app, function () {
  console.log(`listening on port ${port}`)
})