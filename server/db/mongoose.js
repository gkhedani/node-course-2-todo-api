var mongoose = require("mongoose");

// tell mongoose which promise library to use
mongoose.Promise = global.Promise;
// process.env.MONGODB_URI =
//   "mongodb://gkhedani:MyMongo@ds121622.mlab.com:21622/koko";
//MONGODB_URI is now configured in config.js based on the NODE_ENV
mongoose.connect(process.env.MONGODB_URI);
// mongoose.connect("mongodb://localhost:27017/TodoApp");

module.exports = {
  mongoose
};
