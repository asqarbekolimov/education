import React from "react";
import { Roboto } from "@next/font/google";
import { Heading, Tag, Text } from "../components";
const font = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function Index() {
  return (
    <div className={font.className}>
      <Heading tag="h1">Heading</Heading>
      <Text size="m">Text</Text>
      <Tag size="m" color="green">
        Size = red
      </Tag>
    </div>
  );
}
