(function (homeController) {

  var data = require("../data");

  homeController.init = function (app) {

      app.get("/", function (req, res) {
          // res.render("jade/index", { title: "Express + Jade" }) -- only while using jade view engine
          // res.render("ejs/index", { title: "Express + Ejs view engine" })
          data.getNoteCategories(function (err, results) {
              res.render("index", {
                  title: "Using Express server with Vash view engine",
                  error: err,
                  categories: results,
                  newCatError: req.flash("newCatName")          
              });
          });
      });

      // for angular call
      app.get("/notes/:categoryName", function (req, res) {
          var categoryName = req.params.categoryName;
          res.render("notes", { title: categoryName });
      });

      app.post("/newCategory", function (req, res) {
          var categoryName = req.body.categoryName;
          data.createNewCategory(categoryName, function (err) {
              if (err) {
                  // Handle Error
                  console.log(err);
                  req.flash("newCatName", err);                 
                  res.redirect("/");
              } else {
                  res.redirect("/notes/" + categoryName);
              }
          });
      });

  };

})(module.exports);