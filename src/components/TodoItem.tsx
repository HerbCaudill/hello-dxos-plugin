import { IconTrash } from "@tabler/icons-react"

import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

export function TodoItem({ title, completed, onToggle, onDelete }: Props) {
  return (
    <li className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3 shadow-sm">
      <input
        type="checkbox"
        checked={completed}
        onChange={onToggle}
        className="size-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
      />
      <span className={cn("flex-1 text-gray-800", completed && "text-gray-400 line-through")}>
        {title}
      </span>
      <Button variant="ghost" size="icon-sm" onClick={onDelete} aria-label="Delete todo">
        <IconTrash className="size-4 text-gray-400 hover:text-red-500" />
      </Button>
    </li>
  )
}

type Props = {
  title: string
  completed: boolean
  onToggle: () => void
  onDelete: () => void
}
