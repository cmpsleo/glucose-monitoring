import { ReactNode } from "react";
import { Placement } from "tippy.js";

export type TooltipProps = {
  content?: any;
  children: ReactNode;
  placement?: Placement;
};
