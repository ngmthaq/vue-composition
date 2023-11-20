import dayjs from "dayjs";

export function getCurrentYMD() {
  return dayjs().format("YYYYMMDD");
}
