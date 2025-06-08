// app/tasks/[id]/page.tsx
"use client"
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface ITask {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export default function TaskPage() {
  const [task, setTask] = useState<ITask | null>(null);
   const params = useParams();
  const id = params?.id;
  useEffect(() => {
    async function fetchTask() {
      const res = await fetch(`/api/tasks/${id}`);
      if (res.ok) {
        const data = await res.json();
        setTask(data);
      }
    }
    fetchTask();
  }, [id]);

  if (!task) return <div>Loading...</div>;

  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>Status: {task.completed ? "Completed" : "Pending"}</p>
    </div>
  );
}
