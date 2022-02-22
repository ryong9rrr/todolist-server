const morgan = require("morgan");
const express = require("express");
const { nanoid } = require("nanoid");
const app = express();
const PORT = 3000;

const html = `
    <h1>투두리스트 서버입니다.</h1>
`;

class Item {
  constructor(text, id = nanoid()) {
    const createdTime = Date.now();
    this.id = id;
    this.category = "todo";
    this.text = text;
    this.createdAt = Number(createdTime);
    this.updatedAt = Number(createdTime);
  }
}

const items = [
  new Item("자바스크립트 공부하기", "1"),
  new Item("서버만들기", "2"),
];

app.use(morgan("dev"));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/", (req, res) => {
  return res.send(html);
});

app.get("/items", (req, res) => {
  return res.status(200).json(items).end();
});

app.delete("/items/:category/:id", async (req, res) => {
  const prevLength = items.length;
  const { category, id } = req.params;
  if (category !== "todo" || category !== "doing" || category !== "done") {
    return res.status(400).end();
  }

  const valid = (item) => item.category === category && item.id === id;
  const targetIndex = items.findIndex(valid);

  if (targetIndex < 0) {
    return res.status(400).send("존재하지 않는 id에요.").end();
  }

  items.splice(targetIndex, 1);
  if (prevLength === items.length - 1) {
    return res.status(204).end();
  }

  // 로직이 잘못되었다.
  return res.status(403).end();
});

app.post("/items", (req, res) => {
  if (!req.body.text) {
    return res.status(400).end();
  }
  const newItem = new Item(req.body.text);
  items.push(newItem);
  return res.status(201).json(newItem).end();
});

app.put("/items/:id", (req, res) => {
  const { id } = req.params;
  const newText = req.body.text;
  const targetIndex = items.findIndex((item) => item.id === id);

  if (targetIndex < 0) {
    return res.status(400).end();
  }

  items[targetIndex].text = newText;
  return res.json(items[targetIndex]).end();
});

app.put("/items/:category/:id", (req, res) => {
  const { category, id } = req.params;
  if (!(category === "todo" || category === "doing")) {
    return res.status(400).end();
  }
  const targetIndex = items.findIndex((item) => item.id === id);
  if (targetIndex < 0) {
    return res.status(404).end();
  }
  items[targetIndex].updatedAt = Date.now();
  if (category === "todo") {
    items[targetIndex].category = "doing";
  } else if (category === "doing") {
    items[targetIndex].category = "done";
  }
  const result = items[targetIndex];
  items.sort((a, b) => a.updatedAt - b.updatedAt);
  return res.json(result);
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

module.exports = app;
