// Retrieve
const MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:1337", function(err, db) {
    if(!err) {
        console.log("We are connected");
    }
});