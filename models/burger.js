const orm = require('../config/orm.js');

module.export = function all(callback) {
  // callback : function
  orm.selectAll('burgers', (result) => {
    callback(result);
  });
};

module.export = function add(name, callback) {
  // name : string
  // callback : function
  orm.insertOne('burgers', 'burger_name', name, (result) => {
    callback(result);
  });
};

module.export = function devour(burgerId, callback) {
  // burgerId : integer
  // callback : function
  orm.updateOne('burgers', 'devoured', {
    id: burgerId,
  }, (result) => {
    callback(result);
  });
};
