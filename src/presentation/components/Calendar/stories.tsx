import { Meta, Story } from "@storybook/react/types-6-0";

import { Calendar } from ".";

export default {
  title: "Calendar",
  component: Calendar,
  argTypes: {
    display: {
      type: "",
    },
  },
} as Meta;

export const Default: Story<Calendar.Props> = (args) => <Calendar {...args} />;

Default.args = {
  calendars: [
    {
      date: new Date(),
      items: [
        {
          content: <p>Hello calendar item</p>,
        },
      ],
    },
  ],
};
