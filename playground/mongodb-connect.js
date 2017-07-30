// connect to the mongo client
// const MongoClient = require("mongodb").MongoClient;
// below, using ES6 destructoring, is the same as above with additional properties
const {MongoClient, ObjectID} = require("mongodb");

// var obj = new ObjectID();
// console.log(obj);

// object destructoring
// var user = {name: "Gail", age: 61};
// var {name} = user;
// console.log(name);

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    // return stops the rest of the code from running
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");

  // db.collection("Todos").insertOne({
  //     text: "Something to do",
  //     completed:  false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log("Unable to insert todo", err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection("Users").insertOne({
  //   name:  "Gail Hedani",
  //   age:  61,
  //   location: "Honolulu, HI"
  // }, (err, result) => {
  //   if (err) {
  //     return console.log("Unable to insert user", err);
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // });

  db.close();
});
