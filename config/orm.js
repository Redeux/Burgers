const dbConfig = process.env.CLEARDB_DATABASE_URL || require('./connection');
const mysql = require('mysql');

exports.selectAll = (table, callback) => {
  // table : string

  // Create a new connection to the database
  const connection = mysql.createConnection(dbConfig);
  // Connect to the database
  connection.connect();
  // Perform query against all items in burgers table
  connection.query('SELECT * FROM ??', table, (err, rows) => {
    // When a response is received disconnect from the database
    connection.end();
    // If the response is an error return it
    if (process.env.node_env === 'development') if (err) throw err;
    // on valid data return it
    return callback(rows);
  });
};

exports.insertOne = (table, column, value, callback) => {
  // table : string
  // column : string
  // value : string

  // Create a new connection to the database
  const connection = mysql.createConnection(dbConfig);
  // Connect to the database
  connection.connect();
  // Insert a new row into a table
  connection.query('INSERT INTO ?? (??) VALUES (?)', [table, column, value], (err, row) => {
    // When a response is received disconnect from the database
    connection.end();
    // If the response is an return return it
    if (process.env.node_env === 'development') if (err) throw err;
    // on valid data return it
    return callback(row);
  });
};

exports.updateOne = (table, column, where, callback) => {
  // table : string
  // column : object
  // where : object

  // Create a new connection to the database
  const connection = mysql.createConnection(dbConfig);
  // Connect to the database
  connection.connect();
  // Update the burger to devoured based on the id
  connection.query('UPDATE ?? SET ? WHERE ?', [table, column, where], (err, row) => {
    // When a response is received disconnect from the database
    connection.end();
    // If the response is an error return it
    if (process.env.node_env === 'development') if (err) throw err;
    // on valid data return it
    return callback(row);
  });
};
