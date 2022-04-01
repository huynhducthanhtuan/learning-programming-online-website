const authRoute = require("./auth");
const courseRoute = require("./course");
const userRoute = require("./user");
const siteRoute = require("./site");
const braintreeRoute = require("./braintree");

function route(app) {
  app.use("/auth", authRoute);
  app.use("/course", courseRoute);
  app.use("/user", userRoute);
  app.use("/braintree", braintreeRoute);
  app.use("/", siteRoute);
}

module.exports = route;
