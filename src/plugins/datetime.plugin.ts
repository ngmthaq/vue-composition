import dayjs from "dayjs";

export class DatetimeUtils {
  public getCurrentYMD() {
    return dayjs().format("YYYYMMDD");
  }
}

export const datetimeUtils = new DatetimeUtils();
