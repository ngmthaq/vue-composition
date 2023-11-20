export abstract class BaseModel {
  public _milliseconds: number;

  public constructor() {
    this._milliseconds = new Date().valueOf();
  }
}
