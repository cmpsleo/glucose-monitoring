import { Measurement } from "@/domain/models";

export type Display = "short" | "expanded";

export type CardProps = Measurement.Item & {
  display: Display;
  onClick?: () => void;
};
