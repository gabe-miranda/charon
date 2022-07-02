import { CreateTaskDTO } from "../service/index.ts";

const task_list: CreateTaskDTO[] = [];

const getTaskList = () => {
    return task_list;
}

const createNewTask = (task: CreateTaskDTO) => {
    task_list.push(task);
}

export { createNewTask, getTaskList }