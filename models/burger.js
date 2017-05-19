const orm = require('../config/orm.js');

exports.all = (callback) => {
  // callback : function
  orm.selectAll('burgers', (result) => {
    callback(result);
  });
};

exports.add = (name, callback) => {
  // name : string
  // callback : function
  orm.insertOne('burgers', 'burger_name', name, (result) => {
    callback(result);
  });
};

exports.devour = (burgerId, callback) => {
  // burgerId : integer
  // callback : function
  orm.updateOne('burgers', 'devoured', {
    id: burgerId,
  }, (result) => {
    callback(result);
  });
};
