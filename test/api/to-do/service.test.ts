import { createTask, CreateTaskDTO, getAllTasks } from '../../../src/api/to-do/service/index.ts'
import { assertEquals } from "https://deno.land/std@0.146.0/testing/asserts.ts";

Deno.test('To-do service', async (test) => {
    await test.step('get task list', () => {
        const expected_response: CreateTaskDTO[] = [];
    
        const tasks = getAllTasks();
    
        assertEquals(tasks, expected_response);
    });

    const new_task: CreateTaskDTO = {
        name: 'Foo bar task',
        completed: true,
        due_date: '2022-06-09',
        completed_at: '2022-04-20'
    };
    await test.step('add new task to list', () => {
        const response = createTask(new_task);
    
        assertEquals(response, new_task);
    });

    await test.step('get task list with new task added', () => {
        const expected_response: CreateTaskDTO[] = [new_task];
    
        const tasks = getAllTasks();
    
        assertEquals(tasks, expected_response);
    });
});
