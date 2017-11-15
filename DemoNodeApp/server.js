'use strict';
//var http = require('http');
//var port = process.env.PORT || 1337;

//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Hello World\n');
//}).listen(port);

var http = require('http');
var express = require("express");
var app = express();
//var ejsEngine = require("ejs-locals");
var controllers = require("./controllers");

// Setup the View Engine
//app.set("view engine", "jade"); -- only while using jade view engine
//app.engine("ejs", ejsEngine); // support master pages
//app.set("view engine", "ejs"); // ejs view engine
app.set("view engine", "vash"); // vash view engine

// set the public static resource folder
app.use(express.static(__dirname + "/public"));

// Map the routes
controllers.init(app);

app.get("/", function (req, res) {
   // res.render("jade/index", { title: "Express + Jade" }) -- only while using jade view engine
   // res.render("ejs/index", { title: "Express + Ejs view engine" })
    res.render("index", { title: "Express + vash view engine" })
});

app.get("/api/users", function (req, res) {
    res.set("Content-Type", "application/json");
    res.send({ name: "Anup", isValid: true, group: "Admin" });
});

var server = http.createServer(app);
server.listen(3000);
