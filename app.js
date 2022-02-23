const morgan = require("morgan");
const express = require("express");
const app = express();
const router = require("./src/controller/router.js");
const PORT = 3000;

app.use(morgan("dev"));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

module.exports = app;
