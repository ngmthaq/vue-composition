import type { AxiosRequestConfig } from "axios";
import { Todo } from "..";
import { BaseRemoteService } from "./base.remote";

export class TodoRemoteService extends BaseRemoteService {
  public async getAllTodoList(configs: AxiosRequestConfig = {}): Promise<Todo[]> {
    const response = await this.api.get("/todos", {}, configs);
    return response.data.map((todo: any) => new Todo(todo.userId, todo.id, todo.title, todo.completed));
  }

  public async getTodo(id: number, configs: AxiosRequestConfig = {}): Promise<Todo> {
    const response = await this.api.get("/todos/" + id, {}, configs);
    return new Todo(response.data.userId, response.data.id, response.data.title, response.data.completed);
  }
}
