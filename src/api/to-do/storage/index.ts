import { CreateTaskDTO } from "../service/index.ts";

const task_list: CreateTaskDTO[] = [];

const getTaskList = (): CreateTaskDTO[] => {
  return task_list;
};

const createNewTask = (task: CreateTaskDTO): CreateTaskDTO => {
  task_list.push(task);
  return task;
};

export { createNewTask, getTaskList };
