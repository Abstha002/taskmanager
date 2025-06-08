import { NextResponse } from 'next/server';

interface ITask{
    id:number,
    title:string,
    description:string,
    completed:boolean
}

export let tasks: ITask[] = [];

export async function GET() {
    console.log("get function hit")
  return NextResponse.json(tasks);
}

export async function POST(req: Request) {
    console.log("get post hit")

  const newTask = await req.json();
  tasks = [newTask, ...tasks];
  return NextResponse.json(newTask);
}
