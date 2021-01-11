import React, { useState } from "react";
import Card from "../card/card";
import styles from "./styles.module.scss";
import Loader from "../loader/loader";

export default function List({ list, updateLists, changeId }) {
  const [loader, setloader] = useState(false);
  const cardChange = () => setloader(!loader);
  return (
    <>
      <div className={styles.list}>
        <h2>{list.list.name}</h2>
        {list.cards.length > 0 ? (
          <div className={styles.cardList}>
            {list.cards.map((card, idx) => {
              return (
                <Card
                  key={idx}
                  tabIndex={(idx + 1).toString()}
                  card={card}
                  type={list.list.name}
                  idList={changeId}
                  updateLists={updateLists}
                  cardChange={cardChange}
                />
              );
            })}
            {loader ? <Loader imgStyles={{ width: "30px" }} /> : <></>}
          </div>
        ) : (
          <p>No Cards Found !</p>
        )}
      </div>
    </>
  );
}
