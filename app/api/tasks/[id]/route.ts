// app/api/tasks/[id]/route.ts
"use client"
import { NextResponse } from 'next/server';
import { useSearchParams } from 'next/navigation';

let tasks:any[]=[]

export async function GET(_req: Request, { params }: { params: { id: string } }) {
    const searchParams = useSearchParams();
  const id = parseInt(params.id);
  const title = searchParams.get('title');
  const description= searchParams.get('description');
  const task = {
    id:id,
    title:title,
    description:description,
  }

  if (!task) {
    return NextResponse.json({ error: 'Task not found' }, { status: 404 });
  }
  return NextResponse.json(task);
}

