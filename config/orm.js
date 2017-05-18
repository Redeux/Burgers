const connection = require('./connection');

module.export = function selectAll(callback) {
  // Connect to the database
  connection.connect();
  // Perform query against all items in burgers table
  connection.query('SELECT * FROM burgers', (err, rows) => {
    // When a response is received disconnect from the database
    connection.end();
    // If the response is an error return it
    if (err) return callback(err);
    // on valid data return it
    return callback(rows);
  });
};

module.export = function insertOne(name, callback) {
  // Connect to the database
  connection.connect();
  // Insert new row into burgers table
  connection.query('INSERT INTO burgers (burger_name) VALUES (?)', name, (err, row) => {
    // When a response is received disconnect from the database
    connection.end();
    // If the response is an return throw it
    if (err) return callback(err);
    // on valid data return it
    return callback(row);
  });
};

module.export = function updateOne(id, callback) {
  // Connect to the database
  connection.connect();
  // Update the burger to devoured based on the id
  connection.query('UPDATE burgers SET devoured=1 WHERE id=?', id, (err, row) => {
    // When a response is received disconnect from the database
    connection.end();
    // If the response is an error return it
    if (err) return callback(err);
    // on valid data return it
    return callback(row);
  });
};
