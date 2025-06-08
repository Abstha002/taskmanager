import Link from "next/link";
import React from "react"

interface ITask{
    id:number,
    title:string,
    description:string,
    completed:boolean
}

interface ITaskCardProps{
    tasks:ITask[],
    toggleTask:(id:number)=>void;
}
export default function TaskCard({tasks,toggleTask}:ITaskCardProps){
 return(
    <>
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
            <Link href={{
                pathname: `/task/${task.id}`,
                query: {
                title: task.title,
                description: task.description,
                completed: task.completed.toString(),
                },
            }}>
                Go to particular page
            </Link>
          </React.Fragment>
          </li>

        ))}
    </>
 )
}