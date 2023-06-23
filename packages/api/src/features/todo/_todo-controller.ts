import { SaveTodo, Todo } from '@mern-monorepo/common'
import { RequestHandler } from 'express'
import { Types } from 'mongoose'
import { TypedResponse } from 'src/interfaces'
import { todoModel } from './_todo-model'

export const getAllTodos: RequestHandler = async (
  _,
  res: TypedResponse<Todo[]>
) => {
  const todos = await todoModel.find().exec()

  res.json({
    data: todos,
  })
}

export const addTodo: RequestHandler = async (
  req,
  res: TypedResponse<undefined>
) => {
  const data: SaveTodo = req.body

  await todoModel.create({
    _id: new Types.ObjectId(),
    ...data,
  })

  res.json()
}

export const updateTodo: RequestHandler = async (
  req,
  res: TypedResponse<undefined>
) => {
  const data: SaveTodo = req.body

  await todoModel.findByIdAndUpdate(req.params.id, data)

  res.json()
}

export const removeTodo: RequestHandler = async (
  req,
  res: TypedResponse<undefined>
) => {
  await todoModel.findByIdAndDelete(req.params.id)

  res.json()
}
