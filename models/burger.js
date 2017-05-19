const Orm = require('../config/orm.js');

exports.all = (callback) => {
  // callback : function
  const dbQuery = new Orm();
  dbQuery.selectAll('burgers', (result) => {
    return callback(result);
  });
};

exports.add = (name, callback) => {
  // name : string
  // callback : function
  const dbQuery = new Orm();
  dbQuery.insertOne('burgers', 'burger_name', name, (result) => {
    return callback(result);
  });
};

exports.devour = (burgerId, callback) => {
  // burgerId : integer
  // callback : function
  const dbQuery = new Orm();
  dbQuery.updateOne('burgers', {
    devoured: 1,
  }, {
    id: burgerId,
  }, (result) => {
    return callback(result);
  });
};
