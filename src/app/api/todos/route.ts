import { todoController } from "@/server/controller/todo";

export async function GET(request: Request, response: Response) {
  return todoController.get(request, response);
}
