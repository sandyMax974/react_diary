// const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");
// const app = require("../lib/server.js");

module.exports = function (app) {
  app.use(function async(req, res, next) {
    res.header(
      // "Access-Control-Allow-Origin: http://localhost:3000",
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  console.log(controller);
  app.post("/api/auth/signup", controller.signup);
};
