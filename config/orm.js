const dbConfig = process.env.CLEARDB_DATABASE_URL || require('./connection');
const mysql = require('mysql');

// Perform query against all items in burgers table
exports.selectAll = (table, callback) => {
  // table : string

  // Create a new connection pool for the database
  const pool = mysql.createPool(dbConfig);
  // Connect to the database
  pool.getConnection((err, connection) => {
    if (err) return callback(false);
    connection.query('SELECT * FROM ??', table, (err, rows) => {
      // Release the connection on response
      connection.release();
      if (err) return callback(false);
      // If the response is an error return it
      // if (process.env.node_env === 'development') if (err) throw err;
      // on valid data return it
      return callback(rows);
    });
  });
};

// Insert one new row into a table
exports.insertOne = (table, column, value, callback) => {
  // table : string
  // column : string
  // value : string

  // Create a new connection pool for the database
  const pool = mysql.createPool(dbConfig);
  // Connect to the database
  pool.getConnection((err, connection) => {
    if (err) return callback(false);
    // Insert a new row into a table
    connection.query('INSERT INTO ?? (??) VALUES (?)', [table, column, value], (err, row) => {
      // Release the connection on response
      connection.release();
      if (err) return callback(false);
      // If the response is an return return it
      // if (process.env.node_env === 'development') if (err) throw err;
      // on valid data return it
      return callback(row);
    });
  });
};

// Update the value of one column in one row of a table
exports.updateOne = (table, column, where, callback) => {
  // table : string
  // column : object
  // where : object

  // Create a new connection pool for the database
  const pool = mysql.createPool(dbConfig);
  // Connect to the database
  pool.getConnection((err, connection) => {
    if (err) return callback(false);
    // Update the burger to devoured based on the id
    connection.query('UPDATE ?? SET ? WHERE ?', [table, column, where], (err, row) => {
      // Release the connection on response
      connection.release();
      if (err) return callback(false);
      // If the response is an error return it
      // if (process.env.node_env === 'development') if (err) throw err;
      // on valid data return it
      return callback(row);
    });
  });
};
