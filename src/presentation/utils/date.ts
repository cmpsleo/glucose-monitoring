import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import relativeTime from "dayjs/plugin/relativeTime";
import ptBR from "dayjs/locale/pt-br";

dayjs.extend(utc);
dayjs.locale(ptBR);
dayjs.extend(relativeTime);

export function formatDate(date?: dayjs.ConfigType) {
  return dayjs(date).utc();
}
