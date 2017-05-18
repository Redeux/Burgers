const orm = require('../config/orm.js');

module.export = function all(callback) {
  orm.selectAll('burgers', (result) => {
    callback(result);
  });
};

module.export = function add(name, callback) {
  orm.insertOne('burgers', 'burger_name', name, (result) => {
    callback(result);
  });
};

module.export = function devour(id, callback) {
  orm.updateOne('burgers', 'devoured', {
    'id': id
  }, (result) => {
    callback(result);
  });
};
