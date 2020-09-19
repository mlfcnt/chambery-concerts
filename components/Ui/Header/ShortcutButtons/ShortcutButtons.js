import React from "react";
import DatePickerButton from "./DatePicker/DatePickerButton";
import NextShowsButton from "./NextShowsButton";
import TodayButton from "./TodayButton";
import styles from "../../../../styles/ShortcutButtons.module.css";

export default function ShortcutButtons({ date }) {
  return (
    <div className={styles.container}>
      <p className={styles.description}>Actualité musicale à Chambéry</p>
      <div>
        <div className={styles.shortcuts_grid}>
          <TodayButton date={date} />
          <NextShowsButton />
          <DatePickerButton date={date} />
        </div>
      </div>
    </div>
  );
}
