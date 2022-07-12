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
            <ul style={styles.checklist}>
              <li>{task.name}</li>
              <li>{task.completed}</li>
              <li>{task.due_date}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

const styles = {
  checklist: {
    "list-style": "none",
  },
} as const;
