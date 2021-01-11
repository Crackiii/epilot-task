import React, { useState } from "react";
import styles from "./styles.module.scss";
import { _fetch } from "../../services/fetch";
import Loader from "../loader/loader";

export default function Form({ idList, updateLists }) {
  const [value, setValue] = useState("");
  const [loader, setShowLoader] = useState(false);

  const handleInput = (ev) => setValue(ev.target.value);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setShowLoader(true);
    _fetch("/createCard", {
      method: "POST",
      body: { name: value, idList },
    }).then(() => {
      setValue("");
      setShowLoader(false);
      updateLists();
    });
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={styles.input}
        type="text"
        placeholder="I want to do..."
        name="todo"
        onChange={handleInput}
        value={value}
        data-testid="text-input"
      />
      {loader ? (
        <Loader imgStyles={{ width: "30px", opacity: "0.2" }} />
      ) : (
        <></>
      )}
    </form>
  );
}
