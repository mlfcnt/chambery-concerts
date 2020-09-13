import React from "react";
import IncrementDate from "./IncrementDate";
import styles from "../../../../styles/MainDate.module.css";

export default function MainDate({ date }) {
  return (
    <div className={styles.div_date_numbers}>
      <div>
        <IncrementDate date={date} type={"d"} typeOfFormat={"ccc"} />
      </div>
      <IncrementDate date={date} type={"d"} typeOfFormat={"dd"} />
      <IncrementDate date={date} type={"M"} typeOfFormat={"LLLL"} />
      <IncrementDate date={date} type={"y"} typeOfFormat={"yyyy"} />
    </div>
  );
}
