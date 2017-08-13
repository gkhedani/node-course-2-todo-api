const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const _ = require("lodash");

var UserSchema = new mongoose.Schema({
  email:  {
    type: String,
    required:  true,
    trim:  true,
    minlength:  1,
    unique: true,
    validate: {
      validator: (value) => {
        return validator.isEmail(value);
      },
      // the above is the same as below
      // validator: validator.isEmail,
      // message: "{VALUE} is not a valid email"
    }
  },
    password: {
      type: String,
      require: true,
      minlength: 6
    },
    tokens: [{
      access: {
        type: String,
        required: true
      },
      token: {
        type: String,
        required: true
      }
    }]
});

// this overrides what mongoose sends back by default
UserSchema.methods.toJSON = function () {
  var user = this;
  //mongoose creates an object
  var userObject = user.toObject();

  return _.pick(userObject, ["_id", "email"]);
};

UserSchema.methods.generateAuthToken = function () {
  // use a regular function rather than an arrow function
  // because arrow functions to not bind to the "this" keyword
  // He set user to "this" to make it clearer
  var user = this;
  var access = "auth";
  var token =
    jwt.sign({_id: user._id.toHexString(), access}, "abc123").toString();

  user.tokens.push({access, token});

// we do this return so that server.js can chain on to the promise
// normally it would look like this
  // user.save().then(() => {
  //   return token;
  // }).then((token) => {
  //   does somethig
  // });
  return user.save().then(() => {
    return token;
  });
};

var User = mongoose.model("User", UserSchema);

module.exports = {User};
