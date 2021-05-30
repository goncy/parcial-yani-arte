import * as React from "react";
import {GetServerSideProps} from "next";

import api from "../api";
import Grid from "../components/Grid";
import {Item} from "../types";

interface Props {
  items: Item[];
}

const Home: React.FC<Props> = ({items}) => {
  return <Grid items={items} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const items = await api.list();

  return {
    props: {
      items: [...items].sort(() => 0.5 - Math.random()),
    },
  };
};

export default Home;
