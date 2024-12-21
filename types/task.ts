export type Task = {
  id: number
  title: string
  color: string
  completed: boolean
}

export type TaskColor = {
  id: string
  value: string
  label: string
}

export interface ListTasksAPIResponse {
  success: boolean,
  data: Task[]
}

export interface GetTaskAPIResponse {
  success: boolean,
  data: Task
}