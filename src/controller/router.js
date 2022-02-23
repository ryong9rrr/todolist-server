const express = require("express");
const router = express.Router();
const Store = require("../model/Store");
const { mainView } = require("../views");

const store = new Store();

router.get("/", (req, res) => {
  return res.send(mainView);
});

router.get("/items", (req, res) => {
  try {
    return res.status(200).json(store.items).end();
  } catch (e) {
    return res.status(500).end();
  }
});

router.delete("/items/:category/:id", async (req, res) => {
  const { category, id } = req.params;
  try {
    const removedItem = store.removeItem(category, id);
    return res.status(204).end();
  } catch (e) {
    return res.status(e.status).send(e.message).end();
  }
});

router.post("/items", (req, res) => {
  if (!req.body.text) {
    return res.status(400).send("text가 없어요..").end();
  }
  try {
    const newItem = store.addItem(req.body.text);
    return res.status(201).json(newItem).end();
  } catch (e) {
    return res.status(e.status).send(e.message).end();
  }
});

router.put("/items/:id", (req, res) => {
  const { id } = req.params;
  const newText = req.body.text;

  try {
    const changedItem = store.changeText(id, newText);
    return res.json(changedItem).end();
  } catch (e) {
    return res.status(e.status).send(e.message).end();
  }
});

router.put("/items/:category/:id", (req, res) => {
  const { category, id } = req.params;
  try {
    const changedItem = store.changeCategory(category, id);
    return res.json(changedItem).end();
  } catch (e) {
    return res.status(e.status).send(e.message).end();
  }
});

module.exports = router;
