'use strict';

var http = require('http');
var express = require("express");
//var cookieParser = require('cookieparser');
var app = express();
var controllers = require("./controllers");
//var ejsEngine = require("ejs-locals");        // ejs view engine
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var flash = require("connect-flash");      

// Setup the View Engine
//app.set("view engine", "jade"); -- only while using jade view engine
//app.engine("ejs", ejsEngine); // support master pages
//app.set("view engine", "ejs"); // ejs view engine
app.set("view engine", "vash"); // vash view engine

// Opt into Services
app.use(express.urlencoded());    //--- this use to make form posting working.
app.use(express.json());
//app.use(express.cookie-parser());                            
app.use(cookieParser());   
//app.use(express.session({ secret: "SampleDemoNodeApp" }));   
app.use(expressSession({ secret: "SampleDemoNodeApp" })); 
app.use(flash());                                           

// set the public static resource folder
app.use(express.static(__dirname + "/public"));

// use authentication
var auth = require("./auth");
auth.init(app);

// Map the routes
controllers.init(app);

app.get("/", function (req, res) {
   // res.render("jade/index", { title: "Express + Jade" })             -- only while using jade view engine
   // res.render("ejs/index", { title: "Express + Ejs view engine" })   -- only while using ejs view engine
    res.render("index", { title: "Express server  + vash view engine" })
});

app.get("/api/users", function (req, res) {
    res.set("Content-Type", "application/json");
    res.send({ name: "Anup", isValid: true, group: "Admin" });
});

var server = http.createServer(app);
server.listen(3000);
var updater = require("./updater");
updater.init(server);