import { RemoteMeasurement } from "@/application/models";
import { LoadHistory } from "@/domain/usecases";
import { HttpClient } from "@/application/protocols/http";

export class RemoteLoadHistory implements LoadHistory {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteMeasurement[]>
  ) {}

  async execute(): Promise<RemoteLoadHistory.Model> {
    const response = await this.httpClient.execute({
      url: this.url,
      method: "get",
    });

    return this.parsePayload(response.body);
  }

  private parsePayload(data: RemoteMeasurement[]): RemoteLoadHistory.Model {
    if (!data) return;

    const transform: {
      [key: string]: RemoteMeasurement[];
    } = data.reduce((prev, current) => {
      const [measuredAt] = new Date(current.measuredAt)
        .toISOString()
        .split("T");
      return {
        ...prev,
        [measuredAt]: [...(prev?.[measuredAt] || []), current],
      };
    }, {});

    const sort = Object.entries(transform).sort(([a], [b]) =>
      new Date(a) > new Date(b) ? 1 : -1
    );

    return sort.map(([measuredAt, items]) => ({
      measuredAt,
      items,
    }));
  }
}

export namespace RemoteLoadHistory {
  export type Model = LoadHistory.Model;
}
