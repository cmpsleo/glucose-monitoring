import { Meta, Story } from "@storybook/react/types-6-0";

import { Button } from "@/presentation/components";

import Tooltip from ".";
import { TooltipProps } from "./types";

export default {
  title: "Tooltip",
  component: Tooltip,
  argTypes: {
    content: {
      control: "text",
    },
  },
} as Meta;

export const Default: Story<TooltipProps> = (args) => (
  <Tooltip {...args}>
    <Button>Hover me</Button>
  </Tooltip>
);

Default.args = {
  content: "Hello :)",
};
