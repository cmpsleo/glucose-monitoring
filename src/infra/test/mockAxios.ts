import axios from "axios";

import { mockHttpResponse } from "@/application/test";

export const mockAxios = (): mockAxios.type => {
  const mock = axios as mockAxios.type;
  mock.request.mockClear().mockResolvedValue(mockHttpResponse());
  return mock;
};

export namespace mockAxios {
  export type type = jest.Mocked<typeof axios>;
}
