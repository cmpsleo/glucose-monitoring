import { Meta, Story } from "@storybook/react/types-6-0";
import { ShoppingBagIcon } from "@heroicons/react/solid";

import { Button } from ".";

export default {
  title: "Actions/Button",
  component: Button,
  argTypes: {
    icon: {
      type: "",
    },
  },
} as Meta;

export const Default: Story<Button.Props> = (args) => <Button {...args} />;

export const WithIcon: Story<Button.Props> = (args) => <Button {...args} />;

Default.args = {
  children: "Button",
};

WithIcon.args = {
  children: "Buy",
  icon: <ShoppingBagIcon />,
};
