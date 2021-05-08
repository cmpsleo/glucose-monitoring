export interface Measurement {
  measuredAt: string;
  items: Measurement.Item[];
}

export namespace Measurement {
  export type Condition = "Normal" | "Hiperglicemia" | "Hipoglicemia";
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
  };
}
