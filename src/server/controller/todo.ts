import { NextResponse } from "next/server";

export async function get(request: Request, response: Response) {
  const todos = [
    {
      id: 1,
      message: "lorem ipsum",
    },
  ];
  return NextResponse.json(todos, { status: 200 });
}

export const todoController = {
  get,
};
