import { mockHttpRequest, mockHttpResponse } from "@/application/test";
import { mockAxios } from "@/infra/test";

import { AxiosHttpClient } from ".";

jest.mock("axios");

type SutTypes = {
  sut: AxiosHttpClient;
  axios: mockAxios.type;
};

function makeSut(): SutTypes {
  const sut = new AxiosHttpClient();
  const axios = mockAxios();

  return {
    sut,
    axios,
  };
}

describe("AxiosHttpClient", () => {
  it("Should execute AxiosHttpClient with correct params", async () => {
    const { sut, axios } = makeSut();

    const request = mockHttpRequest();

    sut.execute(request);

    expect(axios.request).toHaveBeenCalledWith({
      url: request.url,
      data: request.body,
      method: request.method,
    });
  });

  it("Should throw errors", async () => {
    const { sut, axios } = makeSut();

    axios.request.mockRejectedValueOnce({
      response: mockHttpResponse(),
    });

    expect(sut.execute(mockHttpRequest())).toEqual(
      axios.request.mock.results[0].value
    );
  });

  it("Should return correct values", async () => {
    const { sut, axios } = makeSut();

    const request = await sut.execute(mockHttpRequest());
    const response = await axios.request.mock.results[0].value;

    expect(request).toEqual({
      body: response.data,
      statusCode: response.status,
    });
  });
});
