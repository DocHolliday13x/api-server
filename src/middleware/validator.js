`use strict`;

// Validator Middleware
const validator = (req, res, next) => {
  if (!req.query.name) {
    next('Invalid Query');
  } else {
    next();
  }
};

// Export Validator Middleware
module.exports = validator;





