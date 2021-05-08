export type HttpMethod = "get";

export enum HttpStatusCode {
  ok = 200,
}

export interface HttpRequest {
  url: string;
  method: HttpMethod;
  body?: any;
}

export interface HttpResponse<P = any> {
  statusCode: HttpStatusCode;
  body?: P;
}

export interface HttpClient<P = any> {
  execute: (data: HttpRequest) => Promise<HttpResponse<P>>;
}
