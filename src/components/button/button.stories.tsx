import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./button";
import { useState } from "react";

export default {
  name: "Button",
  component: Button,
  argTypes: {
    appearance: {
      type: "string",
      description: "Button color style",
      defaultValue: "primary",
      options: ["primary", "ghost", "success", "failure"],
      control: {
        type: "radio",
      },
    },
    size: {
      type: "string",
      description: "Button size",
      defaultValue: "m",
      options: ["s", "m", "l"],
      control: {
        type: "radio",
      },
    },
    // arrow: {
    //   type: "string",
    //   description: "Arrow functionlity",
    //   defaultValue: "none",
    //   options: ["right", "down", "none"],
    //   control: {
    //     type: "radio",
    //   },
    // },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Button",
  appearance: "primary",
};

export const Ghost = Template.bind({});
Ghost.args = {
  children: "Button",
  appearance: "ghost",
};
export const Success = Template.bind({});
Success.args = {
  children: "Button",
  appearance: "success",
};
export const Failure = Template.bind({});
Failure.args = {
  children: "Button",
  appearance: "failure",
};
export const Small = Template.bind({});
Small.args = {
  children: "Button",
  appearance: "s",
};
export const Medium = Template.bind({});
Medium.args = {
  children: "Button",
  appearance: "m",
};
export const Large = Template.bind({});
Large.args = {
  children: "Button",
  appearance: "l",
};

export const Arrow: ComponentStory<typeof Button> = ({ ...args }) => {
  const [toggle, setToggle] = useState<boolean>(false);

  const toggleButton = () => {
    setToggle((prev) => !prev);
  };
  return (
    <Button
      appearance="primary"
      arrow={toggle ? "down" : "right"}
      onClick={toggleButton}
      {...args}
    >
      Button
    </Button>
  );
};
