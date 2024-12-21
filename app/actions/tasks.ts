'use server'

import { Task } from "@/types/task"

export async function createTask(title: string, color: string): Promise<Task> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        color,
        completed: false,
      }),
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error('Failed to create task')
    }

    const task: Task = await response.json()
    return task
  } catch (error) {
    console.error('Error creating task:', error)
    throw new Error('Failed to create task')
  }
}

export async function toggleTask(id: number, completed: boolean): Promise<Task> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        completed,
      }),
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error('Failed to update task')
    }

    const task: Task = await response.json()
    return task
  } catch (error) {
    console.error('Error updating task:', error)
    throw new Error('Failed to update task')
  }
}

export async function updateTask(id: number, title: string, color: string): Promise<Task> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        color
      }),
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error('Failed to update task')
    }

    const task: Task = await response.json()
    return task
  } catch (error) {
    console.error('Error updating task:', error)
    throw new Error('Failed to update task')
  }
}

export async function deleteTask(id: number): Promise<boolean> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/tasks/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error('Failed to delete task')
    }

    return true
  } catch (error) {
    console.error('Error deleting task:', error)
    throw new Error('Failed to delete task')
  }
}