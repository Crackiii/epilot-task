import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { _fetch } from "../services/fetch";

export default function Trello() {
  const [list, setList] = useState([]);
  const [listLoaded, setlistLoaded] = useState(false);
  const getList = () => {
    return (async () => {
      setlistLoaded(false);
      setList(await _fetch("/getLists", { method: "GET" }));
      setlistLoaded(true);
    })();
  };

  useEffect(getList, []);

  return (
    <div className={styles.trello}>
      <h1 className={styles.h1} data-testid="trello-header">
        Trello Todo App
      </h1>
      <div className={styles.wrapper}>
        {listLoaded ? "List has been loaded" : "Loading please wait..."}
      </div>
    </div>
  );
}
