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

export const getTodos: RequestHandler = (req, res, next) => {
  res.json({ todos: TODOS })
}

// 제네릭을 사용할 수도 있다.
export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id
  const updatedText = (req.body as { text: string }).text
  const targetTodoIndex = TODOS.findIndex((todo) => todo.id === todoId)
  if (targetTodoIndex < 0) {
    // 이 에러는 app.ts에서 설정한 에러핸들링 미들웨어로 갈 것이다.
    throw new Error('Could not find todo.')
  }
  TODOS[targetTodoIndex] = new Todo({ id: todoId, text: updatedText })
  res.json({ message: 'todo is updated.', updateTodo: todoId })
}

export const deleteTodo: RequestHandler = (req, res, next) => {
  const todoId = req.params.id
  const targetTodoIndex = TODOS.findIndex((todo) => todo.id === todoId)
  if (targetTodoIndex < 0) {
    // 이 에러는 app.ts에서 설정한 에러핸들링 미들웨어로 갈 것이다.
    throw new Error('Could not find todo.')
  }
  TODOS.splice(targetTodoIndex, 1)
  res.json({ message: 'todo is deleted.' })
}
