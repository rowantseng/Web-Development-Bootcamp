//jshint esversion:6

const bodyParser = require("body-parser");
const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/wikiDB", { useNewUrlParser: true, useUnifiedTopology: true });

const schema = new mongoose.Schema({
    title: String,
    content: String
});
const Article = mongoose.model("Article", schema);

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.route("/articles")
    .get(function (req, res) {
        Article.find(function (err, foundArticles) {
            if (!err) {
                res.send(foundArticles);
            } else {
                res.send(err);
            }
        });
    })
    .post(function (req, res) {
        const article = new Article({
            title: req.body.title,
            content: req.body.content
        });
        article.save(function (err) {
            if (!err) {
                res.send("Successfully add a new item!");
            } else {
                res.send(err);
            }
        });
    })
    .delete(function (req, res) {
        Article.deleteMany(function (err) {
            if (!err) {
                res.send("Delete all articles.");
            } else {
                res.send(err);
            }
        });
    });  // Remember the semi-colon at the last

// app.get("/articles", function (req, res) {
//     Article.find(function (err, foundArticles) {
//         if (!err) {
//             res.send(foundArticles);
//         } else {
//             res.send(err);
//         }
//     });
// });

// app.post("/articles", function (req, res) {
//     const article = new Article({
//         title: req.body.title,
//         content: req.body.content
//     });
//     article.save(function (err) {
//         if (!err) {
//             res.send("Successfully add a new item!");
//         } else {
//             res.send(err);
//         }
//     });
// });

// app.delete("/articles", function (req, res) {
//     Article.deleteMany(function (err) {
//         if (!err) {
//             res.send("Delete all articles.");
//         } else {
//             res.send(err);
//         }
//     });
// });

//////////////////////// Requests Targetting A Specific Article ////////////////////////

app.route("/articles/:articleTitle")
    .get(function (req, res) {
        Article.findOne({ title: req.params.title }, function (err, foundArticle) {
            if (!err) {
                if (foundArticle) {
                    res.send(foundArticle);
                } else {
                    res.send("No matching articles found.");
                }
            } else {
                res.send(err);
            }
        })
    })
    .put(function (req, res) {
        Article.updateOne(
            { title: req.params.articleTitle },
            { title: req.body.title, content: req.body.content },
            { overwrite: true },
            function (err) {
                if (!err) {
                    res.send("Successfully update!");
                } else {
                    res.send(err);
                }
            }
        )
    })
    .patch(function (req, res) {
        Article.updateOne(
            { title: req.params.articleTitle },
            { $set: req.body },
            function (err) {
                if (!err) {
                    res.send("Successfully patch!");
                } else {
                    res.send(err);
                }
            }
        )
    })
    .delete(function (req, res) {
        Article.deleteOne(
            { title: req.params.articleTitle },
            function (err) {
                if (!err) {
                    res.send("Successfully delete an article!");
                } else {
                    res.send(err);
                }
            }
        )
    });

app.listen(3000, function () {
    console.log("Server started on port 3000!")
});