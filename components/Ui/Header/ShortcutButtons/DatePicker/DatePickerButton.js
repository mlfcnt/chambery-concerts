import React from "react";
import DatePicker from "./DatePicker";
import fr from "date-fns/locale/fr";
import { registerLocale } from "react-datepicker";
registerLocale("fr", fr);

export default function DatePickerButton({ date }) {
  return (
    <div>
      {/* <button onClick={toggleCalendar}>Calendar</button> */}
      <DatePicker date={date} />
      {/* <span>DatePicker</span> */}
    </div>
  );
}
