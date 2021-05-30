import * as React from "react";
import {GetStaticProps} from "next";

import api from "../api";
import Grid from "../components/Grid";
import {Item} from "../types";

interface Props {
  items: Item[];
}

const Home: React.FC<Props> = ({items}) => {
  const sortedItems = [...items].sort(() => 0.5 - Math.random());

  return <Grid items={sortedItems} />;
};

export const getServerSideProps: GetStaticProps = async () => {
  const items = await api.list();

  return {
    props: {
      items,
    },
  };
};

export default Home;
