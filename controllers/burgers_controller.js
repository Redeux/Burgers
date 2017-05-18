const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const burger = require('../models/burger');

const app = express();

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false,
}));
// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
// register the .handlebars extension with express and set the main layout page
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
}));
// Use handlebars to render the website
app.set('view engine', 'handlebars');

app.route('/')
  .get((req, res) => {
    burger.all(rows => {

    });
  })
  .post((req, res) => {

  })
  .delete((req, res) => {

  });

app.use((req, res) => {
  res.redirect('/');
});

module.exports = app;
