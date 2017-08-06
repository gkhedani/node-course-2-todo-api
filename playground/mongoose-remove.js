const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {ObjectID} = require("mongodb");
const {User} = require("./../server/models/user");

// to remove all
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove()

Todo.findByIdAndRemove("59879aade0ea563da6bf8408").then((todo) => {
  console.log(todo);
});
