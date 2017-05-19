const burger = require('../models/burger');

module.exports = (app) => {
  app.get('/', (req, res) => {
    burger.all((rows) => {
      const burgers = {
        uneaten: [],
        eaten: [],
      };
      rows.map(obj => obj.devoured ? burgers.eaten.push(obj) : burgers.uneaten.push(obj));
      res.render('index', burgers);
    });
  });

  app.post('/', (req, res) => {
    burger.add(req.body.burger, response => res.redirect('/'));
  });

  app.delete('/:id', (req, res) => {
    burger.devour(req.params.id, response => res.redirect('/'));
  });

  app.use((req, res) => {
    res.redirect('/');
  });
};
