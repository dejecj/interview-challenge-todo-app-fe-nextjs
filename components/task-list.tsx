import { useCallback, useEffect, useState, useTransition, useOptimistic } from "react";
import { Task, ListTasksAPIResponse } from "@/types/task";
import { TaskItem } from "./task-item";
import { EmptyState } from "./empty-state";
import { Separator } from "./ui/separator";
import { deleteTask, toggleTask } from "@/app/actions/tasks";

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [optimisticTasks, addOptimisticTask] = useOptimistic(tasks);
  const [, startTransition] = useTransition();

  useEffect(() => {
    const load = async () => {
      const taskRequest = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL as string}/tasks`, { cache: 'no-store' });
      if (taskRequest.ok) {
        const payload: ListTasksAPIResponse = await taskRequest.json();
        setTasks(payload.data);
      }
    }
    load()
  }, [])

  const handleToggle = useCallback(async (id: number) => {
    const taskToUpdate = tasks.find((task) => task.id === id);
    if (taskToUpdate) {
      const optimisticTask = { ...taskToUpdate, completed: !taskToUpdate.completed };
      
      startTransition(async () => {
        addOptimisticTask(state => state.map((task) => (task.id === optimisticTask.id ? optimisticTask : task)));
        try {
          await toggleTask(id, optimisticTask.completed);
          setTasks((prevTasks) =>
            prevTasks.map((task) => (task.id === id ? optimisticTask : task))
          );
        } catch (err) {
          console.error("Failed to update task:", err);
        }
      });
    }
  }, [tasks, addOptimisticTask]);
  
  const handleDelete = useCallback(async (id: number) => {
    const taskToDelete = tasks.find((task) => task.id === id);
    if (taskToDelete) {
      startTransition(async () => {
        addOptimisticTask(state => state.filter(t=>t.id !== taskToDelete.id));
        try {
          await deleteTask(id);
          setTasks(state => state.filter(t=>t.id !== taskToDelete.id));
        } catch (err) {
          console.error("Failed to update task:", err);
        }
      });
    }
  }, [tasks, addOptimisticTask]);

  const completedTasks = optimisticTasks.filter((task) => task.completed);

  return (
    <div className="space-y-6">
      <div className="flex justify-between text-sm">
        <p className="text-primary font-bold">
          Tasks{" "}
          <span className="px-2 py-1 rounded-full bg-card text-white">
            {optimisticTasks.length}
          </span>
        </p>
        <p className="text-secondary font-bold">
          Completed{" "}
          <span className="px-2 py-1 rounded-full bg-card text-white">
            {completedTasks.length} of {optimisticTasks.length}
          </span>
        </p>
      </div>

      {optimisticTasks.length === 0 ? (
        <>
          <Separator className="bg-muted" />
          <EmptyState />
        </>
      ) : (
        <div className="space-y-2">
          {optimisticTasks.map((task) => (
            <TaskItem key={task.id} task={task} onToggle={handleToggle} onDelete={handleDelete}/>
          ))}
        </div>
      )}
    </div>
  );
}

