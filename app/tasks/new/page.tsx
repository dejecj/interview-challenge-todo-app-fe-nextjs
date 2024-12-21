"use client"
import { createTask } from "@/app/actions/tasks"
import { TaskForm } from "@/components/task-form"

export default function Home() {
  const handleSubmit = async (title: string, color: string) => {
    try {
      await createTask(title, color);
    } catch (error) {
      // Error will be handled by the TaskForm component
      throw error
    }
  }
  return (
    <main className="p-4 md:p-6 lg:p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <TaskForm 
          onSubmit={handleSubmit}
        />
      </div>
    </main>
  )
}

