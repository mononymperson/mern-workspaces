export interface Todo {
  _id: string
  title: string
}

export interface SaveTodo extends Pick<Todo, 'title'> {}
