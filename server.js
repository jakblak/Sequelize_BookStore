const express = require('express');
const db = require('./server/models/db');
const app = express();
const port = 3000;
const seed = require('./server/models/seed/seed-db');

// setup the Express middlware
require('./server/middleware/middleware')(app);

// setup the api
require('./server/api')(app);

// connect to DB then run server
db.sequelize.sync({
    // force: true
  })
  // .then(() => {
  //   seed.insert();
  // })
  .then(() => {
  app.listen(port, () => {
    console.log('running server on port ' + port);
  })
});
