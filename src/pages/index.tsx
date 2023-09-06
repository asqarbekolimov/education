import React, { useState } from "react";
import { Roboto } from "@next/font/google";
import {
  Button,
  Card,
  Heading,
  Input,
  Rating,
  Tag,
  Text,
  TextArea,
} from "../components";
const font = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function Index() {
  const [isClick, setIsClick] = useState(false);
  const [rating, setRating] = useState<number>(4);
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
      <Input placeholder="Enter name" />
      <TextArea placeholder="enter text" />
      <br />
      <Rating rating={rating} isEditable={true} setRating={setRating} />
      <Card color="white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At ratione
        eaque deserunt tempore quod. Magnam eius quod vero sunt? Quis.
      </Card>
      <Card color="primary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At ratione
        eaque deserunt tempore quod. Magnam eius quod vero sunt? Quis.
      </Card>
    </div>
  );
}
