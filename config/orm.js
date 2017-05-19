const dbConfig = process.env.CLEARDB_DATABASE_URL || require('./connection');
const mysql = require('mysql');

function Orm() {
  this.pool = mysql.createPool(dbConfig);
}

// Orm.prototype.connect = function() {
//   this.pool.getConnection((err, connection) => {
//     if (err) throw err;

//   });
// };

// Orm.prototype.end = function() {
//   this.connection.end();
// };

Orm.prototype.selectAll = function(table, callback) {
  this.pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query('SELECT * FROM ??', table, (err, rows) => {
      // release the connection on response
      connection.release();
      if (err) throw err;
      // If the response is an error return it
      // if (process.env.node_env === 'development') if (err) throw err;
      // on valid data return it
      return callback(rows);
    });
  });
};

Orm.prototype.insertOne = function(table, column, value, callback) {
  this.pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query('INSERT INTO ?? (??) VALUES (?)', [table, column, value], (err, row) => {
      // release the connection on response
      connection.release();
      if (err) throw err;
      // If the response is an return return it
      // if (process.env.node_env === 'development') if (err) throw err;
      // on valid data return it
      return callback(row);
    });
  });
};

Orm.prototype.updateOne = function(table, column, where, callback) {
  this.pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query('UPDATE ?? SET ? WHERE ?', [table, column, where], (err, row) => {
      // release the connection on response
      connection.release();
      if (err) throw err;
      // If the response is an error return it
      // if (process.env.node_env === 'development') if (err) throw err;
      // on valid data return it
      return callback(row);
    });
  });
};

module.exports = Orm;

// // Perform query against all items in burgers table
// exports.selectAll = (table, callback) => {
//   // table : string

//   // Create a new connection pool for the database
//   const connection = mysql.createConnection(dbConfig);
//   // Connect to the database
//   connection.connect();

//   connection.query('SELECT * FROM ??', table, (err, rows) => {
//     // destroy the connection on response
//     if (err) throw err;
//     // If the response is an error return it
//     // if (process.env.node_env === 'development') if (err) throw err;
//     // on valid data return it
//     return callback(rows);
//   });
//   connection.end();
// };

// // Insert one new row into a table
// exports.insertOne = (table, column, value, callback) => {
//   // table : string
//   // column : string
//   // value : string

//   // Create a new connection pool for the database
//   const pool = mysql.createPool(dbConfig);
//   // Connect to the database
//   pool.getConnection((err, connection) => {
//     if (err) throw err;
//     // Insert a new row into a table
//     connection.query('INSERT INTO ?? (??) VALUES (?)', [table, column, value], (err, row) => {
//       // destroy the connection on response
//       connection.destroy();
//       if (err) throw err;
//       // If the response is an return return it
//       // if (process.env.node_env === 'development') if (err) throw err;
//       // on valid data return it
//       return callback(row);
//     });
//   });
// };

// // Update the value of one column in one row of a table
// exports.updateOne = (table, column, where, callback) => {
//   // table : string
//   // column : object
//   // where : object

//   // Create a new connection pool for the database
//   const pool = mysql.createPool(dbConfig);
//   // Connect to the database
//   pool.getConnection((err, connection) => {
//     if (err) throw err;
//     // Update the burger to devoured based on the id
//     connection.query('UPDATE ?? SET ? WHERE ?', [table, column, where], (err, row) => {
//       // destroy the connection on response
//       connection.destroy();
//       if (err) throw err;
//       // If the response is an error return it
//       // if (process.env.node_env === 'development') if (err) throw err;
//       // on valid data return it
//       return callback(row);
//     });
//   });
// };