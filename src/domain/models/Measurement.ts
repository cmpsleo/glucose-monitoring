export interface Measurement {
  condition: Measurement.Condition;
  context: Measurement.Contexts;
}

export namespace Measurement {
  export type Condition = "normal" | "hiperglicemia" | "hipoglicemia";

  export type Contexts = "fasting" | "before" | "after";
}
