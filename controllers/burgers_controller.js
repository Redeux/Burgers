const burger = require('../models/burger');

module.exports = (app) => {
  app.get('/', (req, res) => {
    burger.all((rows) => {
      if (!rows) res.redirect('/');
      const burgers = {
        uneaten: [],
        eaten: [],
      };
      rows.map(obj => obj.devoured ? burgers.eaten.push(obj) : burgers.uneaten.push(obj));
      res.render('index', burgers);
    });
  });

  app.post('/', (req, res) => {
    burger.add(req.body.burger, () => res.redirect('/'));
  });

  app.delete('/:id', (req, res) => {
    burger.devour(parseInt(req.params.id, 10), () => res.redirect('/'));
  });

  app.use((req, res) => {
    res.redirect('/');
  });
};