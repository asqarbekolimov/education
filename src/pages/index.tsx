import React, { useState } from "react";
import { HomePageComponent } from "../page-components";

function Index(): JSX.Element {
  const [isClick, setIsClick] = useState(false);
  const [rating, setRating] = useState<number>(4);

  return <HomePageComponent />;
}

export default Index;
