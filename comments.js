// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// Create an express app
const app = express();

// Use morgan for logging
app.use(morgan('combined'));

// Use bodyParser to parse JSON bodies
app.use(bodyParser.json());

// Use cors to allow cross-origin requests
app.use(cors());

// Create a default response for the root route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the web server
app.listen(8081, () => {
  console.log('Listening on port 8081');
});