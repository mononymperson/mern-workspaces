import { SaveTodo, Todo } from '@mern-monorepo/common'
import { useAxios } from '../utils/axios'

export const useTodoApi = () => {
  const axios = useAxios('todo')

  const removeTodo = async (id: string) => {
    return await axios.delete(`/${id}/`)
  }

  const getAllTodos = async () => {
    const { data } = await axios.get<Todo[]>('/')

    return data
  }

  const addTodo = async (saveTodo: SaveTodo) => {
    return await axios.post('/', saveTodo)
  }

  const updateTodo = async (id: string, saveTodo: SaveTodo) => {
    return await axios.put(`/${id}`, saveTodo)
  }

  return {
    updateTodo,
    addTodo,
    getAllTodos,
    removeTodo,
  }
}
