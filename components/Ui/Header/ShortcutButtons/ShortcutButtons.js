import React from "react";
import DatePickerButton from "./DatePicker/DatePickerButton";
import NextShowsButton from "./NextShowsButton";
import TodayButton from "./TodayButton";
import styles from "../../../../styles/ShortcutButtons.module.css";
import { isDesktopOrLaptop } from "../../../../lib/helpers/reponsive";

export default function ShortcutButtons({ date }) {
  return (
    <div className={styles.container}>
      {isDesktopOrLaptop() && (
        <span className={styles.description}>
          Actualité musicale à Chambéry
        </span>
      )}
      <div className={styles.shortcuts_flex}>
        <DatePickerButton date={date} />
        <TodayButton date={date} />
        <NextShowsButton />
      </div>
    </div>
  );
}
