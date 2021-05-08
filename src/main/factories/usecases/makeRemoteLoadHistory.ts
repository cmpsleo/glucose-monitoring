import { LoadHistory } from "@/domain/usecases";
import { RemoteLoadHistory } from "@/application/usecases";
import { makeApiUrl, makeAxiosHttpClient } from "@/main/factories/http";

export function makeRemoteLoadHistory(): LoadHistory {
  return new RemoteLoadHistory(
    makeApiUrl("/51cd6da0-5a8a-4c1c-9933-0ac66616ca4b"),
    makeAxiosHttpClient()
  );
}
