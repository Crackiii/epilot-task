import React from "react";
import styles from "./styles.module.scss";
import { _fetch } from "../../services/fetch";

export default function Card({
  card,
  type,
  idList,
  updateLists,
  cardChange,
  tabIndex,
}) {
  const handleRemove = async (ev, id) => {
    cardChange();
    await _fetch("/deleteCard", {
      method: "POST",
      body: { id },
    });
    cardChange();
    updateLists();
  };
  const handleCheck = async (ev, id, idList) => {
    cardChange();
    await _fetch("/moveCard", {
      method: "POST",
      body: { id, idList },
    });
    cardChange();
    updateLists();
  };

  return (
    <div data-id={card.id} className={styles.card} tabIndex={tabIndex}>
      <input
        type="checkbox"
        id={card.id}
        checked={type === "Done" ? true : false}
        onChange={(ev) => handleCheck(ev, card.id, idList)}
      />
      <label htmlFor={card.id}>{card.name}</label>
      <span
        className={styles.cardRemove}
        onClick={(ev) => handleRemove(ev, card.id)}
      >
        &#x274C;
      </span>
    </div>
  );
}
