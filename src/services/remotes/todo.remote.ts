import type { AxiosRequestConfig } from "axios";
import { Api } from "@/plugins/axios.plugin";
import { Todo } from "../models/todo.model";

export async function getAllTodoList(_: any, configs: AxiosRequestConfig = {}): Promise<Todo[]> {
  const api = new Api();
  const response = await api.default().get("/todos", {}, configs);
  return response.data.map((todo: any) => new Todo(todo.userId, todo.id, todo.title, todo.completed));
}

export async function getTodo(payloads: GetTodoPayload, configs: AxiosRequestConfig = {}): Promise<Todo> {
  const api = new Api();
  const response = await api.default().get("/todos/" + payloads.id, {}, configs);
  return new Todo(response.data.userId, response.data.id, response.data.title, response.data.completed);
}

export type GetTodoPayload = { id: number };
