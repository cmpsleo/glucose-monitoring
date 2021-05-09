import faker from "faker";

import { HttpClientSpy } from "@/application/test";

import { RemoteLoadHistory } from ".";
import { RemoteMeasurement } from "@/application/models";
import { HttpStatusCode } from "@/application/protocols/http";
import {
  mockRemoteMeasurement,
  mockRemoteLoadHistoryPayload,
} from "@/application/test";

type SutTypes = {
  sut: RemoteLoadHistory;
  httpClientSpy: HttpClientSpy<RemoteMeasurement[]>;
};

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<RemoteMeasurement[]>();
  const sut = new RemoteLoadHistory(url, httpClientSpy);

  return {
    sut,
    httpClientSpy,
  };
};

describe("RemoteLoadHistory", () => {
  it("Should call HttpClient with correct params", async () => {
    const url = faker.internet.url();

    const { sut, httpClientSpy } = makeSut(url);

    await sut.execute();

    expect(httpClientSpy.url).toBe(url);
    expect(httpClientSpy.method).toBe("get");
  });

  it("Should return response parsed as LoadHistory Model", async () => {
    const { sut, httpClientSpy } = makeSut();

    const payload = mockRemoteMeasurement();

    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: payload,
    };

    const response = await sut.execute();

    expect(response).toEqual(mockRemoteLoadHistoryPayload());
  });
});
