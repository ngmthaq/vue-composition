import { BaseRemoteService } from "./base.remote";

export class TodoRemoteService extends BaseRemoteService {
  public async getAllTodoList() {
    const response = await this.api.get("/todos");
    console.log(response);
  }
}
