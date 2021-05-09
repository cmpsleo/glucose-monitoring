import { Measurement } from "@/domain/models";

export type DetailsProps = {
  onClose?: () => void;
  measurement: Measurement.Item;
};
