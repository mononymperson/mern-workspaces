import { Todo } from '@mern-monorepo/common'
import { model, Schema } from 'mongoose'

const todoSchema: Schema<Todo> = new Schema({
  _id: {
    type: String,
  },
  title: {
    type: String,
  },
})

export const todoModel = model<Todo>('User', todoSchema)
