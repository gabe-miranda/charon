import { createNewTask, getTaskList } from '../storage/index.ts'

export type CreateTaskDTO = {
    name: string;
    completed: boolean;
    due_date: string;
    completed_at: string | null;
}

const getAllTasks = (): Response => {
    return new Response(JSON.stringify(getTaskList()));
}

const createTask = (task: CreateTaskDTO): Response => {
    createNewTask(task);
    return new Response(JSON.stringify(task));
}

export { createTask, getAllTasks }