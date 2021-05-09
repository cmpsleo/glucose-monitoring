import { Meta } from "@storybook/react/types-6-0";

import { Base } from ".";

const { Alignment, Backdrop, Content } = Base;

export default {
  title: "Modals/Example",
} as Meta;

export const Example = () => (
  <Alignment>
    <Backdrop />
    <Content>Content here</Content>
  </Alignment>
);
