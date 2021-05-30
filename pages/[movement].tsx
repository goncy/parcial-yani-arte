import * as React from "react";
import {GetStaticProps, GetStaticPaths} from "next";

import api from "../api";
import Grid from "../components/Grid";
import {Item} from "../types";

interface Props {
  items: Item[];
}

const Movement: React.FC<Props> = ({items}) => {
  const [shuffled, setShuffled] = React.useState(items);

  React.useEffect(() => {
    setShuffled((items) => [...items].sort(() => 0.5 - Math.random()));
  }, []);

  return <Grid items={shuffled} />;
};

export const getStaticProps: GetStaticProps = async ({params: {movement}}) => {
  const items = api.movement(movement as string);

  return {
    props: {
      items,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const movements = api.movements();

  return {
    paths: movements.map((movement) => ({
      params: {
        movement,
      },
    })),
    fallback: false,
  };
};

export default Movement;
