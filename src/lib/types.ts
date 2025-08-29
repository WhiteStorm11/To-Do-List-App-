export type Task = {
  id: string
  title: string
  description: string | null 
  is_completed: boolean
  user: string
  created_at: string
}