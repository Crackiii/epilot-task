import React from "react";
import styles from "./styles.module.scss";

export default function Form() {
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
    </form>
  );
}
