'use client'

import { CirclePlus } from "lucide-react"
import { TaskList } from "@/components/task-list"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter();

  return (
    <main className="p-4 md:p-6 lg:p-8">
      <div className="max-w-2xl mx-auto space-y-8 relative -top-[50px]">

        <Button 
          onClick={() => router.push('/tasks/new')}
          className="w-full mb-6"
        >
          Create Task <CirclePlus />
        </Button>

        <TaskList />
      </div>
    </main>
  )
}

