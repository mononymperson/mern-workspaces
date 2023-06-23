import { SaveTodo, saveTodoSchema, Todo as ITodo } from '@mern-monorepo/common'
import { Field, Form, Formik, FormikHelpers, FormikProps } from 'formik'
import { useEffect, useState } from 'react'
import { useTodoApi } from '../../api/todo-api'
import style from './index.module.css'

const todoApi = useTodoApi()

export const Todo: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])
  const [editTodo, setEditTodo] = useState<ITodo>()

  const [saveTodo, setSaveTodo] = useState<SaveTodo>({
    title: '',
  })

  const removeTodo = async (_id: string) => {
    try {
      await todoApi.removeTodo(_id)
      fetchTodos()
    } catch (error) {
      alert(error)
    }
  }

  const onSubmit = async (
    data: SaveTodo,
    { resetForm }: FormikHelpers<SaveTodo>
  ) => {
    setEditTodo(undefined)
    resetForm()

    try {
      if (editTodo) {
        await todoApi.updateTodo(editTodo._id, data)
      } else {
        await todoApi.addTodo(data)
      }
    } catch (error) {
      alert(error)

      return
    }

    fetchTodos()
  }

  const fetchTodos = () => {
    todoApi
      .getAllTodos()
      .then((data) => {
        setTodos(data)
      })
      .catch((e) => alert(e))
  }

  useEffect(() => {
    if (editTodo) {
      setSaveTodo({
        title: editTodo.title,
      })
    } else {
      setSaveTodo({
        title: '',
      })
    }
  }, [editTodo])

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <div className={style.todoContainer}>
      <h2>Example Tossdos</h2>
      <Formik
        enableReinitialize
        onSubmit={onSubmit}
        validationSchema={saveTodoSchema}
        initialValues={saveTodo}
      >
        {(props: FormikProps<SaveTodo>) => (
          <Form className={style.todoHeader}>
            <Field name="title"></Field>
            <button type="submit">
              {editTodo ? 'Save changes' : 'Add todo'}
            </button>
            <span className={style.errorMessage}>{props.errors.title}</span>
          </Form>
        )}
      </Formik>
      <ul className={style.todoBody}>
        {todos.map((todo, index) => (
          <li
            className={style.todoItem}
            onClick={() => setEditTodo(todo)}
            key={index}
          >
            <span>{todo.title}</span>
            <button
              onClick={(e) => {
                e.stopPropagation()
                removeTodo(todo._id)
              }}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo
