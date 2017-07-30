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

  // db.collection("Todos").find({completed: false}).toArray().then((docs) => {
  // db.collection("Todos").find({
  //   _id: new ObjectID("597d3deedda1b86c687d8739")
  // }).toArray().then((docs) => {
  //   console.log("Todos");
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log("Unable to fetch documents");
  // });
  // db.collection("Todos").find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log("Unable to fetch documents");
  // });
  db.collection("Users").find({name: "Gail Hedani"}).toArray().then((docs)  => {
    console.log("Users");
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log("Unable to fetch documents");
  });

  // db.close();
});
