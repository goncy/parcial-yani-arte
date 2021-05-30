import * as React from "react";
import {GetStaticProps} from "next";

import api from "../api";

interface Props {
  movements: string[];
}

const Movements: React.FC<Props> = ({movements}) => {
  return (
    <ul>
      <li>
        <a href="/">todos</a>
      </li>
      {movements.map((movement) => (
        <li key={movement}>
          <a href={`/${movement}`}>{movement}</a>
        </li>
      ))}
    </ul>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const movements = api.movements();

  return {
    props: {
      movements,
    },
  };
};

export default Movements;
