const {ObjectID} = require("mongodb");
const port = process.env.PORT || 3000;

var express = require("express");
var bodyParser = require("body-parser");

var {mongoose} = require("./db/mongoose");
var {Todo} = require("./models/todo");
var {User} = require("./models/user");

var app = express();

app.use(bodyParser.json());

// resource creation
app.post("/todos", (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get("/todos", (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

// GET /todos/some id
app.get("/todos/:id", (req,res) => {
  var id = req.params.id;
  // validate id using isValid
    // 404 = not found, send back empty send
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  // findbyId
    // success - send it back
    // if not found, send 404 with emtpy body
    // error - send back 400
  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e) => res.status(400).send());
});

app.delete("/todos/:id", (req, res) => {
  //get the id
  var id = req.params.id;
  // not a valid ide - return 404
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  // remove by id
  Todo.findByIdAndRemove(id).then((todo) => {
    if (!todo) {
      console.log("todo not found");
      return res.status(404).send();
    }
    return res.status(200).send({todo});
  }).catch((e) => res.status(400).send());
    // success if no doc, 404
    // otherwise doc w/200
    // error - 400 w/empty body
});

app.listen(port, () => {
  console.log(`Started at port ${port}`);
});

// var newTodo = new Todo({
//   text: " Paint house "
// });
//
// newTodo.save().then((doc) => {
//   console.log("Saved todo", doc);
// }, (e) => {
//   console.log("Unable to save todo", e)
// });
//
// var newUser = new User({
//   email: "gkhedani@me.com"
// });
//
// newUser.save().then((doc) => {
//   console.log("Saved user", doc);
// }, (e) => {
//   console.log("Unable to save new user", e);
// });

module.exports = {app};
