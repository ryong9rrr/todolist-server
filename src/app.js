const morgan = require("morgan");
const express = require("express");
const app = express();
const router = require("./controller/router.js");
const Store = require("./model/Store.js");

if (process.env.NODE_ENV !== "test") {
  app.use(morgan("dev"));
}
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use("/", router);

module.exports = app;
