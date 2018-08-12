const bodyParser = require('body-parser');
const cors = require('cors');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const path = require('path');

// setup global middleware here
module.exports = (app) => {
  app.use(cors());
  app.use(favicon(path.join(__dirname, '../../src/favicon.ico')));
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
};
