//jshint esversion: 6

const bodyParser = require("body-parser");
const express = require("express");
const _ = require("lodash");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Define Mongoose, schema, and model
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/todolistDB", {useNewUrlParser: true, useUnifiedTopology: true});
const itemSchema = {name: String};
const Item = mongoose.model("Item", itemSchema);
const listSchema = {name: String, items: [itemSchema]};
const List = mongoose.model("List", listSchema);

const item1 = new Item({name: "Welcome to your todolist!"});
const item2 = new Item({name: "Hit the + button to add a new item."});
const item3 = new Item({name: "<-- Hit this to delete this item."});
const defaultItems = [item1, item2, item3];

app.get("/", function(req, res) {
    Item.find({}, function (foundErr, foundItems) {
        if (!foundErr) {
            if (foundItems.length === 0) {
                Item.insertMany(defaultItems, function (err) {
                    if (!err) {
                        console.log("Insert default items successfully!")
                    } else {
                        console.log(err);
                    }
                });
                res.redirect("/");
            } else {
                res.render("list", {listTitle: "Today", allItems: foundItems});
            }
        } else {
            console.log(foundErr);
        }    
    });
});

app.get("/:listName", function (req, res) {
    const listName = _.capitalize(req.params.listName);
    List.findOne({name: listName}, function (err, foundList) {
        if (!err) {
            if (!foundList) {
                // Create a new list
                const newList = new List({name: listName, items: defaultItems});
                newList.save();
                res.redirect("/" + listName);
            } else {
                // Show an existing list
                res.render("list", {listTitle: foundList.name, allItems: foundList.items});
            }
        } else {
            console.log(err);
        }
    });
});

app.post("/", function (req, res) {
    const newItem = new Item({name: req.body.newItem});
    const listName = req.body.listBtn;
    if (listName === "Today") {
        newItem.save();
        res.redirect("/");
    } else {
        List.findOne({name: listName}, function (err, foundList) {
            if (!err) {
                if (foundList) {
                    foundList.items.push(newItem);
                    foundList.save();
                    res.redirect("/" + listName);
                }
            } else {
                console.log(err);
            }            
        });
    }
});

app.post("/delete", function (req, res) {
    const checkboxId = req.body.checkbox;
    const listName = req.body.listBox;
    if (listName === "Today") {
        Item.findByIdAndRemove(checkboxId, function (err) {
            if (!err) {
                console.log("Delete an item successfully!")
                res.redirect("/");
            } else {
                console.log(err);
            }
          });
    } else {
        List.findOneAndUpdate(
            {name: listName}, 
            {$pull: {items: {_id: checkboxId}}}, 
            function (err) {
                if (!err) {
                    console.log("Delete an item from a list successfully!")
                    res.redirect("/" + listName);
                } else {
                    console.log(err);
                }
        });
    }
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});