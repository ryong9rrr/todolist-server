"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
class Todo {
    constructor({ text }) {
        this.id = Math.random().toString();
        this.text = text;
    }
}
exports.Todo = Todo;
