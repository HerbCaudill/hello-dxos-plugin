import { type Expando } from "@dxos/react-client/echo"

export const TODO_TYPE = "example.com/type/Todo"

export type Todo = Expando & {
  type: typeof TODO_TYPE
  title: string
  completed: boolean
}
