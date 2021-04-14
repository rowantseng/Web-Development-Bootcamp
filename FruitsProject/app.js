//jshint esversion:6

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Define schema
const fruitSchema = new mongoose.Schema({
    name: String,
    name: {
        type: String,
        required: [true, "Please check data entry that no `name` specified!"],
    },
    score: {
        type: Number,
        min: 1,
        max: 10,
    },
    review: String,
});

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema,
});

// Insert an document
const Fruit = mongoose.model("Fruit", fruitSchema);
const fruit = new Fruit({
    name: "Apple",
    score: 8,
    review: "I like it"
});
// fruit.save();

const Person = mongoose.model("Person", personSchema);
const person = new Person({
    name: "John",
    age: 37,
});
person.save();

// Insert multiple documents
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
// Fruit.insertMany([kiwi, orange, banana], function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Success!");
//     }
// });

// Show names of fruits
Fruit.find(function (err, fruits) {
    if (err) {
        console.log(err);
    } else {
        // Close DB connection
        mongoose.connection.close();

        // Show each name of the fruit in DB
        fruits.forEach(function (f) {
            console.log(f.name);
        });
    }
});

// Update an document
const peach = new Fruit({
    score: 7,
    review: "Peach like it"
});
// peach.save();

// Fruit.updateOne({ _id: "6076a5051e7dd85d13e37913" }, { name: "Peach" }, function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully updated!");
//     }
// });

// Delete an document
Fruit.deleteOne({ name: "Peach" }, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully deleted!");
    }
});

// // Delete multiple documents
// Person.deleteMany({ name: "John" }, function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully deleted many documents!");
//     }
// });

const lemon = new Fruit({
    name: "Lemon",
    score: 3,
    review: "Sourest fruit ever!",
});
// lemon.save();

// Establish relationship
Person.updateOne({ name: "John" }, { favoriteFruit: lemon }, function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Successfully updated!");
    }
});