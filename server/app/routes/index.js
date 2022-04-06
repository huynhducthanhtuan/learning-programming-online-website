const authRoute = require("./auth");
const courseRoute = require("./course");
const categoryRoute = require("./category");
const lessonRoute = require("./lesson");
const userRoute = require("./user");

const braintreeRoute = require("./braintree");

function route(app) {
  app.use("/auth", authRoute);
  app.use("/course", courseRoute);
  app.use("/category", categoryRoute);
  app.use("/lesson", lessonRoute);
  app.use("/user", userRoute);
  app.use("/braintree", braintreeRoute);
 
}

module.exports = route;
