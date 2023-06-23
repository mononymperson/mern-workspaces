import { object } from 'yup'
import { SaveTodo } from '../contracts'
import yup from '../utils/yup'

export const saveTodoSchema: yup.ObjectSchema<SaveTodo> = object({
  title: yup.string().required(),
})
