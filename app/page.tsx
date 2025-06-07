"use client"
import {useEffect, useState} from "react"
import React from "react"
interface ITask{
    id:number,
    title:string,
    description:string,
    completed:boolean
}
interface Iinput{
  title:string,
  description:string
}
export default function Home() {

  const [tasks,setTask]=useState<ITask[]>([])
  const [input,setInput]=useState<Iinput>({title:'',description:''})

  const addTask=()=>{
    if(input.title.trim()===''||input.description.trim()==='') return;
    const newTask:ITask={
      id:Date.now(),
      title:input.title,
      description:input.description,
      completed:false
    }
    setTask([newTask,...tasks])
    setInput({title:'',description:''})
  }

  const toggleTask=(id:number)=>{
    setTask(
      tasks.map(task => task.id === id ? { ...task, completed: !task.completed}:task)
    )
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>This is the Home page</h1>


      <div className="flex gap-2 mb-4">
        <input
          className="border px-3 py-2 w-full rounded"
          value={input.title}
          onChange={(e) => setInput({...input,title:e.target.value})}
          placeholder="Enter a title"
        />
        <input
          className="border px-3 py-2 w-full rounded"
          value={input.description}
          onChange={(e) => setInput({...input,description:e.target.value})}
          placeholder="Enter a task"
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={addTask}
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            onClick={() => toggleTask(task.id)}
            className={`cursor-pointer px-4 py-2 rounded border ${
              task.completed ? 'line-through text-gray-500 bg-gray-100' : ''
            }`}
          >
          <React.Fragment key={task.id}>
            <div>Task id: {task.id}</div>
            <div>Title: {task.title}</div>
            <div>Description: {task.description}</div>
            <div>Completed: {task.completed ? "Yes" : "No"}</div>
          </React.Fragment>
          </li>

        ))}
      </ul>
      </main>
    </div>
  );
}
