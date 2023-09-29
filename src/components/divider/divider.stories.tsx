import { ComponentMeta, ComponentStory } from "@storybook/react";
import Divider from "./divider";

export default {
  name: "Divider",
  component: Divider,
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => (
  <Divider {...args} />
);

export const Line = Template.bind({});
Line.args = {};
