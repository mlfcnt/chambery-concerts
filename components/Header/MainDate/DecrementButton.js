import React from "react";
import styles from "../../../styles/MainDate.module.css";
import { RiArrowDownSLine } from "react-icons/ri";

export default function DecrementButton({ switchNumber }) {
  return (
    <RiArrowDownSLine
      onClick={() => switchNumber("subtract")}
      className={styles.increment_button}
    />
  );
}
