//jshint esversion:6

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection url
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'fruitsDB';

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

// Use connect method to connect to the server
client.connect(function (err) {

    assert.equal(null, err);
    console.log("Connect successfully to the server");

    const db = client.db(dbName)

    findDocuments(db, function () {
        client.close();
    });
});

const insertDocuments = function (db, callback) {
    const collection = db.collection("fruits")
    collection.insertMany(
        [
            {
                name: "Apple",
                score: 8,
                review: "I like it"
            },
            {
                name: "Orange",
                score: 6,
                review: "A little bit sour"
            },
            {
                name: "Banana",
                score: 9,
                review: "Great"
            }
        ], function (err, result) {
            assert.equal(err, null);
            assert.equal(3, result.result.n);
            assert.equal(3, result.ops.length);
            console.log("Insertd 3 documents into the collection")
            callback(result);
        });
}

const findDocuments = function (db, callback) {
    const collection = db.collection("fruits")
    collection.find({}).toArray(function (err, fruits) {
        assert.equal(err, null);
        console.log(fruits);
        callback(fruits);
    });
}