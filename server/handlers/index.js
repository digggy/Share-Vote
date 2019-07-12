module.exports = {
  // importing all the handlers for auth
  ...require('./auth'),
  // importing all the handlers for polls
  ...require('./poll'),
};

module.exports.errors = (err, req, res, next) => {
  res.status(err.status || 400).json({
    message: err.message || 'Something went wrong'
  });
};

module.exports.notFound = (req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
};