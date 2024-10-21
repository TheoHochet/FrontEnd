const express = require('express');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();
const port = 3000;
app.use(express.static('public'));

const indexRoute = require('./js/index');
const loginRoute = require('./js/login');

app.set('trust proxy', 1);

app.use(session({
  secret: "aeg5a2gLKNth22fAFvlxwQF55z9a63",
  resave: true,
  saveUninitialized: true,
  cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 24 hours
      httpOnly: true,
      secure: true, // set this to true on production
  }
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRoute);
app.use('/', loginRoute);

app.use((req, res, next) => { 
  // Read the HTML file
  res.render('404');
})


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});