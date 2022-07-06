import { LoadHistory } from "@/domain/usecases";
import { RemoteLoadHistory } from "@/application/usecases";
import { makeApiUrl, makeAxiosHttpClient } from "@/main/factories/http";

export function makeRemoteLoadHistory(): LoadHistory {
  return new RemoteLoadHistory(
    makeApiUrl("/6bd9e59d-4e15-4a34-a77b-9e0c156cad6c"),
    makeAxiosHttpClient()
  );
}
