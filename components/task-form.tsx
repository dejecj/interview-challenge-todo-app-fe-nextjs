'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ColorPicker } from "./color-picker"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Task, TaskColor } from "@/types/task"
import { ArrowLeft, PencilRulerIcon, PlusCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import Link from "next/link"

interface TaskFormProps {
  task?: Task
  onSubmit: (title: string, color: string) => Promise<void>
}

export function TaskForm({ onSubmit, task }: TaskFormProps) {
  const [title, setTitle] = useState(task ? task.title : "")
  const [selectedColor, setSelectedColor] = useState<string>(task ? task.color : "")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (title.trim()) {
      try {
        setIsSubmitting(true)
        setError("")
        await onSubmit(title.trim(), selectedColor)
        router.push('/')
      } catch (err) {
        console.log(err)
        setError("Failed to create task. Please try again.")
        setIsSubmitting(false)
      }
    }
  }

  const SubmitText = () => {
    if(isSubmitting){
      if(task) return <>Updating...</>
      else return <>Creating...</>
    } else {
      if(task) return <>Update Task <PencilRulerIcon /></>
      else return <>Add Task <PlusCircle /></>
    }
  }

  return (
    <Card className="w-full border-none bg-foreground">
      <CardHeader>
        <Link href="#" onClick={()=>router.back()}>
          <ArrowLeft className="text-white"/>
        </Link>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-bold text-primary">
              Title
            </label>
            <Input
              id="title"
              placeholder="Ex. Brush your teeth"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="text-white border-none bg-muted"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-primary">Color</label>
            <ColorPicker
              selectedColor={selectedColor}
              onColorSelect={(color: TaskColor) => setSelectedColor(color.value)}
            />
          </div>
          {error && (
            <p className="text-sm text-destructive">{error}</p>
          )}
          <div className="flex gap-2 pt-2">
            <Button type="submit" className="flex-1" disabled={isSubmitting}>
            <SubmitText />
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}