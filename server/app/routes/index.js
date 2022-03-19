const authRoute = require("./auth");
const courseRoute = require("./course");
const userRoute = require("./user");
const siteRoute = require("./site");

function route(app) {
  app.use("/auth", authRoute);
  app.use("/course", courseRoute);
  app.use("/user", userRoute);
  app.use("/", siteRoute);
}

module.exports = route;
