import { Obj, Type } from "@dxos/echo"
import { Query, useQuery, useSpaces } from "@dxos/react-client/echo"

import { type Todo, TODO_TYPE } from "../types/todo"
import { AddTodoForm } from "./AddTodoForm"
import { TodoItem } from "./TodoItem"

export function TodoList() {
  const spaces = useSpaces()
  const space = spaces[0]
  const todos = useQuery(space, Query.type(Type.Expando, { type: TODO_TYPE })) as unknown as Todo[]

  const handleAdd = (title: string) => {
    if (!space) return
    const todo = Obj.make(Type.Expando, { type: TODO_TYPE, title, completed: false })
    space.db.add(todo)
  }

  const handleToggle = (todo: Todo) => {
    todo.completed = !todo.completed
  }

  const handleDelete = (todo: Todo) => {
    space?.db.remove(todo)
  }

  if (!space) {
    return (
      <div className="text-center text-gray-500">
        <p>Initializing...</p>
      </div>
    )
  }

  return (
    <div className="w-full max-w-md space-y-4">
      <AddTodoForm onAdd={handleAdd} />
      {todos.length === 0 ?
        <p className="py-8 text-center text-gray-500">No todos yet. Add one above!</p>
      : <ul className="space-y-2">
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              title={todo.title}
              completed={todo.completed}
              onToggle={() => handleToggle(todo)}
              onDelete={() => handleDelete(todo)}
            />
          ))}
        </ul>
      }
    </div>
  )
}
