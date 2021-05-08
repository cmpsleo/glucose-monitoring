import { Meta, Story } from "@storybook/react/types-6-0";

import { Button } from "@/presentation/components";

import { Tooltip } from ".";

export default {
  title: "Tooltip",
  component: Tooltip,
  argTypes: {
    content: {
      control: "text",
    },
  },
} as Meta;

export const Default: Story<Tooltip.Props> = (args) => (
  <Tooltip {...args}>
    <Button>Hover me</Button>
  </Tooltip>
);

Default.args = {
  content: "Hello :)",
};
