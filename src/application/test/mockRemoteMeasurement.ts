import faker from "faker";

import { RemoteMeasurement } from "@/application/models";
import { RemoteLoadHistory } from "@/application/usecases";

const mockRemoteItem = (measuredAt: string): RemoteMeasurement => ({
  concentration: faker.datatype.number(),
  concentrationUnit: faker.random.word(),
  condition: "Hyperglycemia",
  glucometer: {
    manufacturer: faker.company.companyName(),
    name: faker.company.companyName(),
  },
  mealContext: "Before",
  measuredAt,
  measurementMethod: faker.random.word(),
  notes: faker.random.words(),
});

const mockRemoteItems: RemoteMeasurement[] = [
  mockRemoteItem("2021-03-28T06:37:21Z"),
  mockRemoteItem("2021-03-28T06:37:32.018Z"),
  mockRemoteItem("2021-04-08T20:10:58.252Z"),
];

export function mockRemoteMeasurement() {
  return mockRemoteItems;
}

export function mockRemoteLoadHistoryPayload(): RemoteLoadHistory.Model {
  const items = mockRemoteItems;

  return [
    {
      measuredAt: "2021-03-28",
      items: [items[0], items[1]],
    },
    {
      measuredAt: "2021-04-08",
      items: [items[2]],
    },
  ];
}
