import { History } from "@/presentation/pages";
import { makeRemoteLoadHistory } from "@/main/factories/usecases";

export default function Index() {
  return <History loadHistory={makeRemoteLoadHistory()} />;
}
