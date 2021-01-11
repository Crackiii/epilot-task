import React, { useEffect, useState } from "react";
import Form from "./form/form";
import List from "./list/list";
import styles from "./styles.module.scss";
import Loader from "./loader/loader";
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
      <Form updateLists={getList} idList={listLoaded && list[0].list.id} />
      <div className={styles.wrapper}>
        {listLoaded ? (
          list.map((listItem, i) => {
            return (
              <List
                list={listItem}
                key={i}
                data-id={listItem.list.id}
                updateLists={getList}
                changeId={
                  listItem.list.name === "Done"
                    ? list[0].list.id
                    : list[1].list.id
                }
              />
            );
          })
        ) : (
          <Loader
            wrapperStyles={{
              marginTop: "140px",
              height: "100px",
            }}
            imgStyles={{ width: "50px" }}
          />
        )}
      </div>
    </div>
  );
}
