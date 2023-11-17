import dayjs from "dayjs";

export class Datetime {
  public getCurrentYMD() {
    return dayjs().format("YYYYMMDD");
  }
}
