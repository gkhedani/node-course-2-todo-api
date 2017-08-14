var {User} = require("./../models/user");

// middleware
var authenticate = (req, res, next) => {
  var token = req.header("x-auth");

  User.findByToken(token).then((user) => {
    if (!user) {
      // this will make it drop to the catch
      return Promise.reject();
    }
    // modify the req object
    // res.send(user);
    req.user = user;
    req.token = token;
    next();

  }).catch((e) => {
    res.status(401).send();
  });
};

module.exports = {authenticate};
