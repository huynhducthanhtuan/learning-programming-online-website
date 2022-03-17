const siteRoute = require("./site");
const authRoute = require("./auth");
const courseRoute = require("./course");
const userRoute = require("./user");

function route(app) {
  app.use("/auth", authRoute);
  app.use("/course", courseRoute);
  app.use("/user", userRoute);
  app.use("/", siteRoute);
}

module.exports = route;
