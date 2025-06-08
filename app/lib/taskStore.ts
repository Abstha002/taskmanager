// app/lib/tasksStore.ts
export interface ITask {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export const tasks: ITask[] = [];
