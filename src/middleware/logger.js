`use strict`;

// Logger Middleware
const logger = (req, res, next) => {
  console.log(`Request: ${req.method} ${req.path}`);
  next();
};

// Export Logger Middleware
module.exports = logger;
