const morgan = require("morgan");
const express = require("express");
const app = express();
const PORT = 3000;

const html = `
    <h1>투두리스트 서버입니다.</h1>
`;

const store = {
  todos: [],
  doings: [],
  dones: [],
};

app.use(morgan("dev"));

app.get("/", function (req, res) {
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
