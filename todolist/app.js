//jshint esversion: 6

const bodyParser = require("body-parser");
const express = require("express");
const date = require(__dirname + "/utils.js");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const items = ["Buy food", "Cook Food", "Eat Food"];
const workItems = [];

app.get("/", function(req, res){
    const day = date.getDate();
    res.render("list", {listTitle: day, allItems: items});
});

app.post("/", function (req, res) {
    const item = req.body.newItem;

    if (req.body.listBtn === "Work"){
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work", function (req, res) {
    res.render("list", {listTitle: "Work", allItems: workItems})
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});