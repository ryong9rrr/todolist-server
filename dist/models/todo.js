"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
class Todo {
    constructor({ id, text }) {
        this.id = id || Date.now().toString();
        this.text = text;
    }
}
exports.Todo = Todo;
