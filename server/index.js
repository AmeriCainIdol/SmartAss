const express = require('express');

const app = express();

let port = process.env.PORT || 3030;

app.listen(app, () => {
  console.log(`listening on port ${port}`)
})