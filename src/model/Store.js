const Item = require("./Item.js");

class Store {
  constructor() {
    this._items = [
      new Item("자바스크립트 공부하기", "1"),
      new Item("서버만들기", "2"),
    ];
  }

  get items() {
    return this._items;
  }

  get length() {
    return this._items.length;
  }

  addItem(text) {
    const newItem = new Item(text);
    this._items.push(newItem);
    return newItem;
  }

  removeItem(category, id) {
    if (!(category === "todo" || category === "doing" || category === "done")) {
      throw {
        status: 400,
        message: "존재하지 않는 category에요.",
      };
    }
    const valid = (item) => item.category === category && item.id === id;
    const targetIndex = this._items.findIndex(valid);
    if (targetIndex < 0)
      throw {
        status: 400,
        message: "존재하지 않는 값이에요.",
      };
    const removedItem = this._items[targetIndex];
    this._items.splice(targetIndex, 1);
    return removedItem;
  }

  changeText(id, text) {
    const targetIndex = this._items.findIndex((item) => item.id === id);
    if (targetIndex < 0) {
      throw {
        status: 404,
        message: "존재하지 않는 id에요.",
      };
    }
    this._items[targetIndex].text = text;
    return this._items[targetIndex];
  }

  changeCategory(category, id) {
    if (!(category === "todo" || category === "doing")) {
      throw {
        status: 400,
        message: "존재하지 않는 category에요.",
      };
    }
    const targetIndex = this._items.findIndex((item) => item.id === id);
    if (targetIndex < 0) {
      throw {
        status: 404,
        message: "존재하지 않는 id에요.",
      };
    }
    if (this._items[targetIndex].category !== category) {
      throw {
        status: 400,
        message: "category가 달라요.",
      };
    }
    const target = this._items[targetIndex];
    target.updatedAt = Date.now();
    if (category === "todo") {
      target.category = "doing";
    } else if (category === "doing") {
      target.category = "done";
    }
    this._items.sort((a, b) => a.updatedAt - b.updatedAt);
    return target;
  }
}

module.exports = Store;
