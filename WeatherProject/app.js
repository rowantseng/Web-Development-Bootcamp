const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    const query = req.body.cityName;
    const apiKey = "d7c8500aad02d4c6b8996f6b6ee263a6";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit
    https.get(url, function (response) {
        console.log("Response code: " + response.statusCode);
        response.on("data", function (data) {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const iconUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            res.write("<h1>The temerature in " + query + " is " + temp + " degrees Celcius.</h1>");
            res.write("<p>The weather is currently " + weatherDescription + "</p>");
            res.write("<img src='" + iconUrl + "' alt='icon'>")
            res.send();
        });
    });
});

app.listen(3000, function () {
    console.log("Server started on port 3000.");
});