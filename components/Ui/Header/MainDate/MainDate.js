import React from "react";
import IncrementDate from "./IncrementDate";
import styles from "../../../../styles/MainDate.module.css";

export default function MainDate({ date }) {
  return (
    <div className={styles.div_date_numbers}>
      <IncrementDate date={date} type={"day"} typeOfFormat={"ccc"} />
      <IncrementDate date={date} type={"day"} typeOfFormat={"dd"} />
      <IncrementDate date={date} type={"month"} typeOfFormat={"LLLL"} />
      <IncrementDate date={date} type={"year"} typeOfFormat={"yyyy"} />
    </div>
  );
}
