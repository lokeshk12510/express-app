exports.checkMiddleware = (req, res, next) => {
  console.log('middleware running!');
  req.responseTime = new Date().toISOString();
  next();
};

exports.getId = (req, res, next, val) => {
  console.log(`id is ${val}`);
  next();
};
