(function (homeController) {

  var data = require("../data");

  homeController.init = function (app) {

      app.get("/", function (req, res) {
          // res.render("jade/index", { title: "Express + Jade" }) -- only while using jade view engine
          // res.render("ejs/index", { title: "Express + Ejs view engine" })

          data.getNoteCategories(function (err, results) {

              res.render("index", { title: "Express with Vash", error: err, categories: results });

          });
      });

  };

})(module.exports);