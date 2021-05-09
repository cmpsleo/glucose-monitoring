import faker from "faker";

import { RemoteMeasurement } from "@/application/models";
import { RemoteLoadHistory } from "@/application/usecases";

const mockRemoteItem: RemoteMeasurement = {
  concentration: faker.datatype.number(),
  concentrationUnit: faker.random.word(),
  condition: "Hyperglycemia",
  glucometer: {
    manufacturer: faker.company.companyName(),
    name: faker.company.companyName(),
  },
  mealContext: "Before",
  measuredAt: "2021-03-28T06:37:21Z",
  measurementMethod: faker.random.word(),
  notes: faker.random.words(),
};

export function mockRemoteMeasurement(): RemoteMeasurement[] {
  return [mockRemoteItem];
}

export function mockRemoteLoadHistoryPayload(): RemoteLoadHistory.Model {
  return [
    {
      measuredAt: mockRemoteItem.measuredAt.slice(0, 10),
      items: [mockRemoteItem],
    },
  ];
}
