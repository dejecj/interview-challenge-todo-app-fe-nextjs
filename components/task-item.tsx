import { useState } from 'react'
import { Trash2Icon } from 'lucide-react'
import { Task } from "@/types/task"
import { RoundCheckbox } from './ui/round-checkbox'
import Link from 'next/link'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface TaskItemProps {
  task: Task;
  onToggle: (taskId: number) => Promise<void>;
  onDelete: (taskId: number) => Promise<void>;
}

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  const handleDelete = async () => {
    await onDelete(task.id)
    setIsDeleteModalOpen(false)
  }

  return (
    <div className="flex items-center gap-3 p-4 rounded-lg bg-card">
      <div className={`w-1 h-12 rounded-full ${task.color}`} />
      <RoundCheckbox
        checked={task.completed}
        onCheckedChange={() => onToggle(task.id)}
        className="h-5 w-5 border-2 data-[state=checked]:bg-secondary data-[state=checked]:border-secondary"
      />
      <p className={`flex-1 ${task.completed ? "line-through text-muted-foreground" : "text-white"}`}>
        <Link href={`/tasks/${task.id}`}>{task.title}</Link>
      </p>
      <Dialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
        <DialogTrigger asChild>
          <button
            className="text-destructive hover:text-destructive/80"
            aria-label="Delete task"
          >
            <Trash2Icon className="h-5 w-5 text-muted-foreground" />
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className='text-white'>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this task? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="default" onClick={() => setIsDeleteModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

