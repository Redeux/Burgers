const connection = require('./connection');

module.export = function selectAll(table, callback) {
  // table : string

  // Connect to the database
  connection.connect();
  // Perform query against all items in burgers table
  connection.query('SELECT * FROM ?', table, (err, rows) => {
    // When a response is received disconnect from the database
    connection.end();
    // If the response is an error return it
    if (err) return callback(err);
    // on valid data return it
    return callback(rows);
  });
};

module.export = function insertOne(table, column, value, callback) {
  // table : string
  // column : string
  // value : string

  // Connect to the database
  connection.connect();
  // Insert a new row into a table
  connection.query('INSERT INTO ? (?) VALUES (?)', [table, column, value], (err, row) => {
    // When a response is received disconnect from the database
    connection.end();
    // If the response is an return return it
    if (err) return callback(err);
    // on valid data return it
    return callback(row);
  });
};

module.export = function updateOne(table, column, where, callback) {
  // table : string
  // column : string
  // where : object

  // Connect to the database
  connection.connect();
  // Update the burger to devoured based on the id
  connection.query('UPDATE ? SET ? WHERE ?', [table, column, where], (err, row) => {
    // When a response is received disconnect from the database
    connection.end();
    // If the response is an error return it
    if (err) return callback(err);
    // on valid data return it
    return callback(row);
  });
};
