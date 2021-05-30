import * as React from "react";
import {GetStaticProps} from "next";

import api from "../api";
import Grid from "../components/Grid";
import {Item} from "../types";

interface Props {
  items: Item[];
}

const Home: React.FC<Props> = ({items}) => {
  return <Grid items={items} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const items = await api.list();

  return {
    props: {
      items,
    },
    revalidate: 10,
  };
};

export default Home;
