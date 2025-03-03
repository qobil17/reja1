console.log("Web serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();

const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR", err);
  } else {
    user = JSON.parse(data);
  }
});

//MongoDB chaqirvolamiz

const db = require("./server").db();

//1 Kirish code

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2 Session

//3 View code
app.set("views", "views");
app.set("view engine", "ejs");

//4 Routing code
app.post("/create-item", (req, res) => {
  console.log("user entered /create-item");
  const new_reja1 = req.body.reja1;
  db.collection("plans").insertOne({ reja1: new_reja1 }, (err, data) => {
    console.log(data.ops);
    res.json(data.ops[0]);
  });
  //res.json({ test: "succes" });
  //TODO code with db here
});

app.get("/", function (req, res) {
  console.log("user entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("something went wrong1");
      } else {
        res.render("reja1", { items: data });
      }
    });
});

module.exports = app;
