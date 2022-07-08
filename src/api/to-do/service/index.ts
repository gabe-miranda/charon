import { createNewTask, getTaskList } from "../storage/index.ts";

export interface CreateTaskDTO {
  name: string;
  completed: boolean;
  due_date: string;
  completed_at: string | null;
}

const getAllTasks = (): CreateTaskDTO[] => {
  return getTaskList();
};

const createTask = (task: CreateTaskDTO): CreateTaskDTO => {
  return createNewTask(task);
};

export { createTask, getAllTasks };
