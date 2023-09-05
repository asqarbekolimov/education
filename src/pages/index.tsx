import React, { useState } from "react";
import { Roboto } from "@next/font/google";
import { Button, Heading, Tag, Text } from "../components";
const font = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function Index() {
  const [isClick, setIsClick] = useState(false);
  return (
    <div className={font.className}>
      <Heading tag="h1">Heading</Heading>
      <Text size="m">Text</Text>
      <Tag size="m" color="green">
        Size = red
      </Tag>
      <Button appearance="primary">Primary</Button>
      <Button appearance="ghost">Gohst</Button>
      <Button
        appearance="ghost"
        arrow={isClick ? "down" : "right"}
        onClick={() => setIsClick((prev) => !prev)}
      >
        Arrow
      </Button>
      <Button appearance="primary" arrow="down">
        Arrow
      </Button>
    </div>
  );
}
