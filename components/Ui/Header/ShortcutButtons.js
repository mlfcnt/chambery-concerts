import React from "react";
import { useRouter } from "next/router";

import TodayButton from "./ShortcutButtons/TodayButton";
// import DatePicker from "react-date-picker";

export default function ShortcutButtons({ date }) {
  console.log({ date });
  const router = useRouter();

  return (
    <div className="shortcutButtons" style={{ marginBottom: "3rem" }}>
      {/* <DatePicker
        onChange={(date) => {
          const format = "dd-LL-yyyy";
          console.log(date);
          router.push(
            "/" + DateTime.fromObject({ day, month, year }).toFormat(format)
          );
        }}
        clearIcon={null}
        locale="fr"
        calendarIcon={<FcCalendar />}
      /> */}

      <TodayButton date={date} />
      <button
        onClick={() => {
          router.push("/prochains-concerts");
        }}
      >
        Prochains concerts
      </button>
    </div>
  );
}
