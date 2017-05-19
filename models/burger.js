const Orm = require('../config/orm.js');

exports.all = (callback) => {
  // callback : function
  const dbQuery = new Orm();
  dbQuery.connect();
  dbQuery.selectAll('burgers', (result) => {
    dbQuery.end();
    return callback(result);
  });
};

exports.add = (name, callback) => {
  // name : string
  // callback : function
  const dbQuery = new Orm();
  dbQuery.connect();
  dbQuery.insertOne('burgers', 'burger_name', name, (result) => {
    dbQuery.end();
    return callback(result);
  });
};

exports.devour = (burgerId, callback) => {
  // burgerId : integer
  // callback : function
  const dbQuery = new Orm();
  dbQuery.connect();
  dbQuery.updateOne('burgers', {
    devoured: 1,
  }, {
    id: burgerId,
  }, (result) => {
    dbQuery.end();
    return callback(result);
  });
};
