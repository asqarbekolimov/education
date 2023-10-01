import React, { useState } from "react";
import { HomePageComponent } from "../page-components";
import { GetServerSideProps } from "next";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";
import { withLayout } from "../layout/layout";
import Seo from "../layout/seo/seo";

function Index(): JSX.Element {
  const [isClick, setIsClick] = useState(false);
  const [rating, setRating] = useState<number>(4);

  return (
    <Seo>
      <HomePageComponent />;
    </Seo>
  );
}

export default withLayout(Index);

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: menu } = await axios.post<MenuItem[]>(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find`,
    { firstCategory: 0 }
  );

  return {
    props: {
      menu,
    },
  };
};

interface HomePageProps {
  menu: MenuItem[];
}
