import React from "react";

import {Item} from "../../types";

import styles from "./Grid.module.css";
import GridItem from "./GridItem";

interface Props {
  items: Item[];
}

const Grid: React.FC<Props> = ({items}) => {
  return (
    <div className={styles.container}>
      {items.map((item) => (
        <GridItem key={item.image} item={item} />
      ))}
    </div>
  );
};

export default Grid;
