`use strict`;

// Imports
const express = require('express');

// Handlers
const handler500 = require('./error-handlers/500.js');
const handler404 = require('./error-handlers/404.js');
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
const foodRoutes = require('./routes/food.js');
const clothesRoutes = require('./routes/clothes.js');

// Express Singleton
const app = express();

// Middleware
app.use(express.json());
app.use(logger);
app.use(foodRoutes);
app.use(clothesRoutes);

app.get('/', (req, res, next) => {
  res.send('Hello World');
});

// Routes
app.get('/person', validator, (req, res, next) => {
  let desiredOutput = { name: req.query.name };
  res.status(200).json(desiredOutput);
});

const start = (port) => app.listen(port, () => console.log(`Server up on port ${port}`));

app.use('*', handler404);
app.use(handler500);


// Exports
module.exports = { start, app };





