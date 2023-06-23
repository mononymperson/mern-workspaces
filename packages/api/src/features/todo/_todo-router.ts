import { Router } from 'express'
import {
  addTodo,
  getAllTodos,
  removeTodo,
  updateTodo,
} from './_todo-controller'
import { validateSave } from './_todo-middleware'

export const todoRouter = Router()

todoRouter.get('/', getAllTodos)
todoRouter.post('/', validateSave, addTodo)
todoRouter.put('/:id', validateSave, updateTodo)
todoRouter.delete('/:id', removeTodo)
