import { ComponentMeta, ComponentStory } from "@storybook/react";
import Advantages from "./advantages";
import { AdvantageData } from "../../interfaces/page.interface";

export default {
  name: "Advantages",
  component: Advantages,
} as ComponentMeta<typeof Advantages>;

export const Advantage: ComponentStory<typeof Advantages> = ({ ...props }) => {
  const arr: AdvantageData[] = [
    {
      title: "Reactjs class Component",
      description: "        Lorem ipsum dolor sit amet consectetur.",
      id: "1",
    },
    {
      title: "Nextjs SSR",
      description: "        Lorem ipsum dolor sit amet consectetur.",
      id: "2",
    },
    {
      title: "Vuejs Directive",
      description: "        Lorem ipsum dolor sit amet consectetur.",
      id: "3",
    },
    {
      title: "SEO",
      description: "        Lorem ipsum dolor sit amet consectetur.",
      id: "4",
    },
  ];
  return <Advantages advantages={arr} {...props} />;
};
