const { log } = require("console");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const morgan = require("morgan");
const bodyParse = require("body-parser");
const cookieParse = require("cookie-parser");
const expressValidator = require("express-validator");

require("dotenv").config();
const PORT = process.env.PORT || 8000;
const route = require("./app/routes");

app.use(morgan("dev"));
app.use(bodyParse.json());
app.use(cookieParse());
app.use(expressValidator());

// connect DB
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log("Connected to Database");
});
mongoose.connection.on("error", (err) => {
  console.log("Connecting error", err);
});

// routing
route(app);

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));

// All other GET requests not handled before will return our React app
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
// });

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}/`);
});
