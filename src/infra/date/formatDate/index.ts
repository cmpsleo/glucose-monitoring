import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import relativeTime from "dayjs/plugin/relativeTime";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(utc);
dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);

export function formatDate(date?: dayjs.ConfigType) {
  return dayjs(date).utc();
}
