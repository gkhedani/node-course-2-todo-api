const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {ObjectID} = require("mongodb");
const {User} = require("./../server/models/user");

// var id = "59840ffde39f9f0939c80fba11";
//
// if (!ObjectID.isValid(id)) {
//   console.log("ID not valid");
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log("Todos", todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log("Todo", todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log("Id not found");
//   }
//   console.log("Todo by id", todo);
// }).catch((e) => console.log(e));

var userID = "597e8861e5bde948be693f17";

User.findById(userID).then((user) => {
  if (!user) {
    return console.log("User ID not found");
  }
  console.log("User ID", user);
}).catch((e) => console.log(e));
