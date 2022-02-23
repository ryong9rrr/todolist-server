const { nanoid } = require("nanoid");

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

module.exports = Item;
