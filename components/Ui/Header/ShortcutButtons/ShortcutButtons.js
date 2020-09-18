import React from "react";
import DatePickerButton from "./DatePicker/DatePickerButton";
import NextShowsButton from "./NextShowsButton";
import TodayButton from "./TodayButton";
import styles from "../../../../styles/ShortcutButtons.module.css";
export default function ShortcutButtons({ date }) {
  return (
    <div className={styles.container}>
      <TodayButton date={date} />
      <DatePickerButton />
      <NextShowsButton />
    </div>
  );
}
