import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import loaderImg from "../../images/loader.gif";

export default function Loader({ wrapperStyles, imgStyles }) {
  return (
    <>
      <div className={styles.loader} style={{ ...wrapperStyles }}>
        <img src={loaderImg} style={{ ...imgStyles }} data-testid="img" />
      </div>
    </>
  );
}
