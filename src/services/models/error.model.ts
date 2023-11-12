import { BaseModel } from "./base.model";

export class ApiError extends BaseModel {
  public status: number;
  public statusText: string;
  public message: string;
  public error: any;

  public constructor(status: number, statusText: string, message: string, error: any) {
    super();

    this.status = status;
    this.statusText = statusText;
    this.message = message;
    this.error = error;
  }
}
