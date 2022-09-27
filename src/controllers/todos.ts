import { RequestHandler } from 'express'
import { Todo } from '../models/todo'
// RequestHandler 타입으로 간략하게 할 수 있다.

// DB는 사용하지 않는다...ㅎ
const TODOS: Todo[] = []

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text
  const newTodo = new Todo({ text })
  TODOS.push(newTodo)

  res.status(201).json({ message: 'Created todo.', createTodo: newTodo })
}
