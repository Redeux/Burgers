const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static content for the app from the 'public' directory in the application directory.
app.use(express.static(path.join(__dirname, '/public')));

// Import routes from the controller
require('./controllers/burgers_controller')(app);

// Start listening for connections
app.listen(port);
