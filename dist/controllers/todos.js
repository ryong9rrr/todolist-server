"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodo = void 0;
const todo_1 = require("../models/todo");
// RequestHandler 타입으로 간략하게 할 수 있다.
// DB는 사용하지 않는다...ㅎ
const TODOS = [];
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todo_1.Todo({ text });
    TODOS.push(newTodo);
    res.status(201).json({ message: 'Created todo.', createTodo: newTodo });
};
exports.createTodo = createTodo;
