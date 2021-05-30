import * as React from "react";
import {GetStaticProps} from "next";

import api from "../api";
import Grid from "../components/Grid";
import {Item} from "../types";

interface Props {
  items: Item[];
}

const Home: React.FC<Props> = ({items}) => {
  const [shuffled, setShuffled] = React.useState(items);

  React.useEffect(() => {
    setShuffled((items) => [...items].sort(() => 0.5 - Math.random()));
  }, []);

  return <Grid items={shuffled} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const items = api.all();

  return {
    props: {
      items,
    },
  };
};

export default Home;
