"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
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
const getTodos = (req, res, next) => {
    res.json({ todos: TODOS });
};
exports.getTodos = getTodos;
// 제네릭을 사용할 수도 있다.
const updateTodo = (req, res, next) => {
    const todoId = req.params.id;
    const updatedText = req.body.text;
    const targetTodoIndex = TODOS.findIndex((todo) => todo.id === todoId);
    if (targetTodoIndex < 0) {
        // 이 에러는 app.ts에서 설정한 에러핸들링 미들웨어로 갈 것이다.
        throw new Error('Could not find todo.');
    }
    TODOS[targetTodoIndex] = new todo_1.Todo({ id: todoId, text: updatedText });
    res.json({ message: 'todo is updated.', updateTodo: todoId });
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) => {
    const todoId = req.params.id;
    const targetTodoIndex = TODOS.findIndex((todo) => todo.id === todoId);
    if (targetTodoIndex < 0) {
        // 이 에러는 app.ts에서 설정한 에러핸들링 미들웨어로 갈 것이다.
        throw new Error('Could not find todo.');
    }
    TODOS.splice(targetTodoIndex, 1);
    res.json({ message: 'todo is deleted.' });
};
exports.deleteTodo = deleteTodo;
