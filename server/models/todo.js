var mongoose = require("mongoose");

// create model for mongoose so that it knows how to store out data
// _ signifies that it is an ObjectID
var Todo = mongoose.model("Todo", {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim:  true
  },
  completed: {
    type: Boolean,
    default:  false
  },
  completedAt: {
    type: Number,
    default: null
  },
  _creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

module.exports = {Todo};
