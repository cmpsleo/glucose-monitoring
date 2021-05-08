import { Measurement } from "@/domain/models";

export interface LoadHistory {
  execute: () => Promise<LoadHistory.Model>;
}

export namespace LoadHistory {
  export type Model = Measurement[];
}
