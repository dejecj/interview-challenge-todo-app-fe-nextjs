"use client"
import { updateTask } from "@/app/actions/tasks";
import { TaskForm } from "@/components/task-form"
import { Task, GetTaskAPIResponse } from "@/types/task";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function TaskPage() {
  const { id } = useParams();
  const router = useRouter();
  const [task, setTask] = useState<Task>()

  useEffect(() => {
    const load = async () => {
      const taskRequest = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL as string}/tasks/${id}`);
      if (taskRequest.ok) {
        const payload: GetTaskAPIResponse = await taskRequest.json();
        setTask(payload.data);
      } else {
        router.push('/');
      }
    }

    load();
  }, [id, router])

  const handleSubmit = useCallback(async (title: string, color: string) => {
    try {
      if (task) await updateTask(task.id, title, color)
      router.push('/')
    } catch (error) {
      // Error will be handled by the TaskForm component
      throw error
    }
  },[task, router])

  return (
    <main className="p-4 md:p-6 lg:p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        {
          task ?
            <TaskForm
              task={task}
              onSubmit={handleSubmit}
            />
          :
            null
        }
      </div>
    </main>
  )
}

