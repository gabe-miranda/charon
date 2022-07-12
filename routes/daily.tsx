/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import TaskList from "../islands/TaskList.tsx";
import { CreateTaskDTO } from "../src/api/to-do/service/index.ts";

const getData = async (): Promise<CreateTaskDTO[]> => {
  return (await fetch("http://localhost:8000/api/to-do")).json();
};

export const handler: Handlers = {
  async GET(_, ctx) {
    const data = await getData();
    if (data.length > 0) {
      return ctx.render(data);
    }
    return ctx.render(null);
  },
};

export default function DailyDashboard({ data }: PageProps) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.header}>
        <p>Header</p>
      </div>
      <div style={styles.main}>
        <div style={styles.calendar}>
          <p>calendar</p>
        </div>
        <div style={styles.tasks}>
          <TaskList
            task_data={data}
          />
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    margin: "0 10%",
    display: "flex",
    height: "100vh",
    "flex-direction": "column",
  },
  header: {
    width: "100%",
    height: "15vh",
    background: "red",
  },
  main: {
    height: "80vh",
    display: "flex",
    "flex-grow": 1,
  },
  calendar: {
    display: "flex",
    background: "blue",
    "flex-grow": 1,
    width: "20%",
    margin: "0 1em 0 0",
    "align-items": "center",
    "justify-content": "center",
  },
  tasks: {
    display: "flex",
    background: "grey",
    "flex-grow": 1,
    width: "80%",
    "align-items": "center",
    "justify-content": "center",
  },
} as const;
