import faker from "faker";

import {
  HttpClient,
  HttpRequest,
  HttpResponse,
  HttpStatusCode,
} from "@/application/protocols/http";

export function mockHttpRequest(): HttpRequest {
  return {
    url: faker.internet.url(),
    method: faker.random.arrayElement(["get"]),
    body: faker.random.objectElement(),
  };
}

export function mockHttpResponse(): any {
  return {
    data: faker.random.objectElement(),
    status: faker.datatype.number(),
  };
}

export class HttpClientSpy<R = any> implements HttpClient<R> {
  url?: string;
  method?: string;
  body?: string;
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok,
  };

  async execute(data: HttpRequest): Promise<HttpResponse<R>> {
    this.url = data.url;
    this.method = data.method;
    this.body = data.body;

    return this.response;
  }
}
