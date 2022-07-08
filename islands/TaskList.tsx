/** @jsx h */
import { h } from "preact";
import { CreateTaskDTO } from "../src/api/to-do/service/index.ts";

export default function TaskList(props: { task_data: CreateTaskDTO[] | null }) {
  if (!props.task_data) {
    return <h1>Task not found</h1>;
  }

  return (
    <div>
      <h1>Task Island</h1>
      {props.task_data.map((task) => {
        return (
          <div>
            <h2>{task.name}</h2>
            <h2>{task.due_date}</h2>
          </div>
        );
      })}
    </div>
  );
}
