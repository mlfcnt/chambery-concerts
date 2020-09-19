import React from "react";
import DatePicker from "./DatePicker";

export default function DatePickerButton({ date }) {
  return (
    <div>
      {/* <button onClick={toggleCalendar}>Calendar</button> */}
      <DatePicker date={date} />
      {/* <span>DatePicker</span> */}
    </div>
  );
}
