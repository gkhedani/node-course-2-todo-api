var mongoose = require("mongoose");

// tell mongoose which promise library to use
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://gkhedani:MyMongo@ds121622.mlab.com:21622/koko" ||
"mongodb://localhost:27017/TodoApp")
// mongoose.connect("mongodb://localhost:27017/TodoApp");

module.exports = {
  mongoose
};
