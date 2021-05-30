import React from "react";

import {Item} from "../../types";

import styles from "./GridItem.module.css";

interface Props {
  item: Item;
}

const GridItem: React.FC<Props> = ({item}) => {
  const [isShown, toggle] = React.useState<boolean>(false);

  return (
    <article key={item.image} className={styles.container}>
      <img src={`/items/${item.image}`} onClick={() => toggle((value) => !value)} />
      <div className={styles.extras}>
        {isShown && (
          <ul>
            <li>Creador: {item.creator}</li>
            <li>Obra: {item.name}</li>
            <li>Movimiento: {item.movement}</li>
          </ul>
        )}
        <input />
      </div>
    </article>
  );
};

export default GridItem;
