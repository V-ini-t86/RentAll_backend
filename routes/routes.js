const homeRoutes = require("./homeRoute");
const loginRoute = require("./loginRoute");
const signUp = require("./signUP");

function initRoutes(app) {
  homeRoutes(app);
  loginRoute(app);
  signUp(app);
}

module.exports = initRoutes;
