import { TodoList } from "../../components/TodoList"

export const TodoRoot = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-linear-to-br from-blue-50 to-indigo-100 p-8">
      <div className="text-center">
        <h1 className="mb-2 text-4xl font-bold text-indigo-600">Todo list</h1>
        <p className="text-gray-600">Powered by DXOS Echo database</p>
      </div>
      <TodoList />
    </div>
  )
}
