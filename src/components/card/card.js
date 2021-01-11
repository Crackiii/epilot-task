import React from "react";
import styles from "./styles.module.scss";

export default function Card() {
  const handleRemove = async (ev) => {};
  const handleCheck = async (ev) => {};

  return (
    <div className={styles.card}>
      <input type="checkbox" onChange={(ev) => handleCheck(ev)} />
      <label htmlFor={card.id}>{card.name}</label>
      <span className={styles.cardRemove} onClick={(ev) => handleRemove(ev)}>
        &#x274C;
      </span>
    </div>
  );
}
