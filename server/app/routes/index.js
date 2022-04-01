const authRoute = require("./auth");
const courseRoute = require("./course");
const userRoute = require("./user");
const categoryRoute = require('./category')

function route(app) {
  app.use("/auth", authRoute);
  app.use("/course", courseRoute);
  app.use("/category", categoryRoute);
  app.use("/user", userRoute);
  
}

module.exports = route;
