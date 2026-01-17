import { type FormEvent, useRef } from "react"
import { IconPlus } from "@tabler/icons-react"

import { Button } from "./ui/button"

export function AddTodoForm({ onAdd }: Props) {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const title = inputRef.current?.value.trim()
    if (title) {
      onAdd(title)
      inputRef.current!.value = ""
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        ref={inputRef}
        type="text"
        placeholder="Add a new todo..."
        className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none"
      />
      <Button type="submit">
        <IconPlus className="size-4" />
        Add
      </Button>
    </form>
  )
}

type Props = {
  onAdd: (title: string) => void
}
