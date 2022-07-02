import { HandlerContext, Handlers } from "https://deno.land/x/fresh@1.0.0/server.ts";
import { createTask, getAllTasks } from "../../../src/api/to-do/service/index.ts"

export const handler: Handlers = {
    GET(_req: Request, _ctx: HandlerContext): Response {
        return getAllTasks();
    },
    async POST(req: Request, _ctx: HandlerContext) {
        return createTask(await req.json());
    },
}