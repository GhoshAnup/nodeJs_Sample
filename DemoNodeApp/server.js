'use strict';

var http = require('http');
var express = require("express");
//var cookieParser = require('cookieparser');
var app = express();
var controllers = require("./controllers");
//var ejsEngine = require("ejs-locals");        // ejs view engine
//var flash = require("connect-flash");         //*not able to install connect-flash from NPM, hence commented the code. */

// Setup the View Engine
//app.set("view engine", "jade"); -- only while using jade view engine
//app.engine("ejs", ejsEngine); // support master pages
//app.set("view engine", "ejs"); // ejs view engine
app.set("view engine", "vash"); // vash view engine

// Opt into Services
app.use(express.urlencoded());    //--- this use to make form posting working.
app.use(express.json());
//app.use(express.cookieParser());                             /*-- not able to install connect-flash from NPM, hence commented the code. */
//app.use(express.session({ secret: "SampleDemoNodeApp" }));   /*-- not able to install connect-flash from NPM, hence commented the code. */
//app.use(flash());                                            /*-- not able to install connect-flash from NPM, hence commented the code. */

// set the public static resource folder
app.use(express.static(__dirname + "/public"));

// Map the routes
controllers.init(app);

app.get("/", function (req, res) {
   // res.render("jade/index", { title: "Express + Jade" })             -- only while using jade view engine
   // res.render("ejs/index", { title: "Express + Ejs view engine" })   -- only while using ejs view engine
    res.render("index", { title: "Express + vash view engine" })
});

app.get("/api/users", function (req, res) {
    res.set("Content-Type", "application/json");
    res.send({ name: "Anup", isValid: true, group: "Admin" });
});

var server = http.createServer(app);
server.listen(3000);
