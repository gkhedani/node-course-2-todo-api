// connect to the mongo client
// const MongoClient = require("mongodb").MongoClient;
// below, using ES6 destructoring, is the same as above with additional properties
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    // return stops the rest of the code from running
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");

  // delete many
  // db.collection("Todos").deleteMany({text: "Eat lunch"}).then((result) => {
  //   console.log(result);
  // });

  // delete one
  // db.collection("Todos").deleteOne({text: "Eat lunch"}).then((result) => {
  //   console.log(result);
  // });

  // find one and delete
  // db.collection("Todos").findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // db.collection("Users").deleteMany({name: "Gail Hedani"}).then((result) => {
  //   console.log(result);
  // });

    db.collection("Users").findOneAndDelete({
      _id: new ObjectID("597d24daf4b384448c6d73f3")
    }).then((result) => {
      console.log(result);
    });
  // db.close();
});
