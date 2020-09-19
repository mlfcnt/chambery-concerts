import React from "react";

import { useRouter } from "next/router";
import { ddLLyyyy } from "../../../../../lib/constants/dateFormat";
import { DateTime, Settings } from "luxon";
import RDP from "react-datepicker";
Settings.defaultLocale = "fr";

export default function DatePicker({ date }) {
  let router = useRouter();

  const handleChange = (date) => {
    router.push("/" + DateTime.fromJSDate(date).toFormat(ddLLyyyy));
  };
  return (
    <RDP
      locale="fr"
      selected={new Date()}
      onChange={(date) => handleChange(date)}
      dateFormat="dd/mm/yyyy"
    />
  );
}
