module.exports.errors = (err, req, res, next) => {
  res.status(err.status || 500).json({
    err: err.message || "Something went wrong"
  });
};

module.exports.notFound = (req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
};
