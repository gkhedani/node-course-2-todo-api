var mongoose = require("mongoose");

// create model for mongoose so that it knows how to store out data
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
  }
});

module.exports = {Todo};
