//jshint esversion: 6

const bodyParser = require("body-parser");
const express = require("express");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

let items = ["Buy food", "Cook Food", "Eat Food"];

app.get("/", function(req, res){
    
    let today = new Date();

    // let currentDay = today.getDay();    
    // if (currentDay === 6 || currentDay === 0) {
    //     // res.write("<h1>Yeah it's weekend!</h1>");     // method 1
    //     // res.sendFile(__dirname + "/weekday.html");    // method 2
    //     day = "weekend";
    // } else {
    //     // res.write("<h1>Boo I have to work...</h1>");  // method 1
    //     // res.write("<p>It's not the weekend.</p>");
    //     // res.send();
    //     // res.sendFile(__dirname + "/weekend.html");    // method 2
    //     day = "weekday";
    // }

    // switch (currentDay) {
    //     case 0:
    //         day = "Sunday";
    //         break;
    //     case 1:
    //         day = "Monday";
    //         break;    
    //     case 2:
    //         day = "Tuesday";
    //         break;
    //     case 3:
    //         day = "Wednesday";
    //         break;
    //     case 4:
    //         day = "Thursday";
    //         break;
    //     case 5:
    //         day = "Friday";
    //         break;
    //     case 6:
    //         day = "Saturday";
    //         break;
    //     default:
    //         console.log("Error: current day is equal to " + day);
    // }

    // res.render("list", {kindOfDay: day});

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };

    let day = today.toLocaleDateString("en-US", options);
    res.render("list", {kindOfDay: day, allItems: items});

    app.post("/", function (req, res) {
        let item = req.body.newItem;
        items.push(item);
        res.redirect("/");
    });

});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});