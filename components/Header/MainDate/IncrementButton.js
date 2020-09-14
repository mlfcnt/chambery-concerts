import React from "react";
import styles from "../../../styles/MainDate.module.css";
import { RiArrowUpSLine } from "react-icons/ri";

export default function IncrementButton({ switchNumber }) {
  return (
    <RiArrowUpSLine
      onClick={() => switchNumber("add")}
      className={styles.increment_button}
    />
  );
}
