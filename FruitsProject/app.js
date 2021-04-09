//jshint esversion:6

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema({
    name: String,
    score: Number,
    review: String
});

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

const Fruit = mongoose.model("Fruit", fruitSchema);
const fruit = new Fruit({
    name: "Apple",
    score: 8,
    review: "I like it"
});
// fruit.save();

const Person = mongoose.model("Person", fruitSchema);
const person = new Person({
    name: "John",
    age: 37,
});
// person.save();

const kiwi = new Fruit({
    name: "Kiwi",
    score: 1,
    review: "Allergic food"
});
const orange = new Fruit({
    name: "Orange",
    score: 10,
    review: "Best fruit ever"
});
const banana = new Fruit({
    name: "Banana",
    score: 2,
    review: "It stinks"
});
Fruit.insertMany([kiwi, orange, banana], function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Success!");
    }
});

const findDocuments = function (db, callback) {
    const collection = db.collection("fruits")
    collection.find({}).toArray(function (err, fruits) {
        assert.equal(err, null);
        console.log(fruits);
        callback(fruits);
    });
}