import React from "react";

import { useRouter } from "next/router";
import { ddLLyyyy } from "../../../../../lib/constants/dateFormat";
import { DateTime, Settings } from "luxon";
import RDP from "react-datepicker";
Settings.defaultLocale = "fr";

export default function DatePicker({ date }) {
  console.log("1", date);
  console.log(
    "2",
    DateTime.fromFormat(date, "dd-LL-yyyy").toFormat("LL/dd/yyyy")
  );
  console.log("3", DateTime.toLocaleString(DateTime.DATE_SHORT));
  let router = useRouter();

  const handleChange = (date) => {
    router.push("/" + DateTime.fromJSDate(date).toFormat(ddLLyyyy));
  };
  return (
    <RDP
      locale="fr"
      selected={DateTime.toLocaleString(DateTime.DATE_SHORT)}
      onChange={(date) => handleChange(date)}
      dateFormat="dd/mm/yyyy"
    />
  );
}
