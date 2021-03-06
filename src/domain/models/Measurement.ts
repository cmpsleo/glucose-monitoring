export interface Measurement {
  measuredAt: string;
  items: Measurement.Item[];
}

export enum Conditions {
  Normal = "Normal",
  Hyperglycemia = "Hyperglycemia",
  Hypoglycemia = "Hypoglycemia",
}

export enum MealContexts {
  Fasting = "Fasting",
  Before = "Before",
  After = "After",
}

export namespace Measurement {
  export type Condition = "Normal" | "Hyperglycemia" | "Hypoglycemia";

  export type Contexts = "Fasting" | "Before" | "After";

  export type Item = {
    concentration: number;
    concentrationUnit: string;
    condition: Measurement.Condition;
    measuredAt: string;
    mealContext: Measurement.Contexts;
    measurementMethod: string;
    glucometer: {
      name: string;
      manufacturer: string;
    };
    notes: string;
  };
}
