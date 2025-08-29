"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabaseClient"
import type { Task } from "@/lib/types"

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState("")
  const [newDescription, setNewDescription] = useState("")

  useEffect(() => {
    fetchTasks()
  }, [])

  async function fetchTasks() {
    const { data, error } = await supabase
      .from("tasks")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) console.error(error)
    else if (data) setTasks(data as Task[])
  }

  async function addTask(e: React.FormEvent) {
    e.preventDefault();
    if (!newTask) return;

    const { data, error } = await supabase
      .from("tasks")
      .insert([{ title: newTask, description: newDescription, is_completed: false }]);

    if (error) {
      console.error("Supabase Insert Error:", error);
    } else {
      console.log("Tarea creada:", data);
    }

    setNewTask("");
    setNewDescription("");
    fetchTasks();
  }

  async function toggleComplete(id: string, current: boolean) {
    const { error } = await supabase
      .from("tasks")
      .update({ is_completed: !current })
      .eq("id", id)

    if (error) console.error(error)
    fetchTasks()
  }

  async function editTask(id: string, title: string, description: string | null) {
    const newTitle = prompt("Nuevo título:", title)
    if (!newTitle) return
    const newDescription = prompt("Nueva descripción:", description || '')

    const { error } = await supabase
      .from("tasks")
      .update({ title: newTitle, description: newDescription })
      .eq("id", id)

    if (error) console.error(error)
    fetchTasks()
  }
  
  async function deleteTask(id: string) {
    const { error } = await supabase
      .from("tasks")
      .delete()
      .eq("id", id)

    if (error) console.error(error)
    fetchTasks()
  }

  return (
    <main className="min-h-screen p-8 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-2xl">
        <h1 className="text-4xl text-center mb-8 tracking-tight">
          Lista de Tareas
        </h1>

        <form onSubmit={addTask} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-1 text-gray-700">Título</label>
            <input
              id="title"
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Ej: Comprar el pan"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium mb-1 text-gray-700">Description (Optional)</label>
            <textarea
              id="description"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              placeholder="Ej: Pan baguette de la panadería de la esquina."
              rows={3}
              className="w-full px-4 py-2 border rounded-lg resize-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Add Task
          </button>
        </form>

        {/* Lista de tareas */}
        <div className="mt-8 space-y-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="p-4 rounded-lg bg-gray-50 flex items-center justify-between shadow-sm border border-gray-200"
            >
              <div className="flex-1 min-w-0">
                <h3
                  className={`text-lg font-semibold cursor-pointer ${
                    task.is_completed ? "line-through text-gray-500" : "text-gray-900"
                  }`}
                  onClick={() => toggleComplete(task.id, task.is_completed)}
                >
                  {task.title}
                </h3>
                {task.description && (
                  <p className={`text-sm text-gray-600 mt-1 ${task.is_completed ? "line-through" : ""}`}>
                    {task.description}
                  </p>
                )}
              </div>
              <div className="flex gap-2 ml-4">
                <button
                  onClick={() => editTask(task.id, task.title, task.description)}
                  className="text-indigo-500 hover:text-indigo-700 transition"
                  title="Editar"
                >
                  ✏️
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-red-500 hover:text-red-700 transition"
                  title="Eliminar"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}