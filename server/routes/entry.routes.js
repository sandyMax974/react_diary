const controller = require("../controllers/entry.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Methods",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/entries", controller.create);

  app.get("/api/entries", controller.findAll);

  app.delete("/api/entries/:id", controller.remove);
};
