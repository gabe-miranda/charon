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
    <div>
      <h1>Hello dash</h1>
      <TaskList
        task_data={data}
      />
    </div>
  );
}
