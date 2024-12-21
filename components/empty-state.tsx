import { ClipboardIcon } from 'lucide-react'

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <ClipboardIcon className="h-12 w-12 text-muted-foreground mb-4" />
      <h3 className="text-lg text-muted-foreground font-medium mb-2">You don&apos;t have any tasks registered yet.</h3>
      <p className="text-muted-foreground">
        Create tasks and organize your to-do items.
      </p>
    </div>
  )
}

