//jshint esversion:6

const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send("<h1>Hello, world!</h1>");
});

app.get("/contact", function (req, res) {
    res.send("Contact me at wanju.ts@gmail.com");
});

app.get("/about", function (req, res) {
    res.send("Hi, this is Rowan Tseng.");
});

app.get("/hobbies", function (req, res) {
    res.send("<ul><li>Coffee</li><li>Hiking</li><li>Cooking</li></ul>");
});

app.listen(3000, function () {
    console.log("Server started on port 3000.");
});