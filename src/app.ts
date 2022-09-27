import express, { NextFunction, Request, Response } from 'express'
import { json } from 'body-parser'
import todoRoutes from './routes/todos'

const app = express()

// body를 분석하기 위한 미들웨어
app.use(json())

app.use('/todos', todoRoutes)

// error handling
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message })
})

app.listen(3000)
