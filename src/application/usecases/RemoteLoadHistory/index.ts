import { LoadHistory } from "@/domain/usecases";
import { HttpClient } from "@/application/protocols/http";

export class RemoteLoadHistory implements LoadHistory {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<LoadHistory.Model>
  ) {}

  async execute(): Promise<LoadHistory.Model> {
    let response;

    try {
      response = await this.httpClient.execute({
        url: this.url,
        method: "get",
      });
    } catch (error) {
      response = error.response;
    }

    return response;
  }
}
