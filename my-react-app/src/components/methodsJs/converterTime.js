import { format } from "date-fns";

export function timeConverter(value) {
  return format(value * 1000, "kk:mm");
}
