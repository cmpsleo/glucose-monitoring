import axios, { AxiosResponse } from "axios";

import {
  HttpClient,
  HttpRequest,
  HttpResponse,
} from "@/application/protocols/http";

export class AxiosHttpClient implements HttpClient {
  async execute(data: HttpRequest): Promise<HttpResponse> {
    let response: AxiosResponse;

    try {
      response = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
      });
    } catch (error) {
      response = error.response;
    }

    return {
      statusCode: response.status,
      body: response.data,
    };
  }
}
