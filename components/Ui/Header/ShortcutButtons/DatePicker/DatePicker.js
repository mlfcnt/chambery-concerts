import React from "react";

import { useRouter } from "next/router";
import { ddLLyyyy } from "../../../../../lib/constants/dateFormat";
import { DateTime, Settings } from "luxon";
import RDP from "react-datepicker";
Settings.defaultLocale = "fr";

export default function DatePicker() {
  let router = useRouter();
  const handleChange = (date) => {
    router.push("/" + DateTime.fromJSDate(date).toFormat(ddLLyyyy));
  };
  return (
    <RDP
      locale="fr"
      onChange={(date) => handleChange(date)}
      dateFormat="dd/mm/yyyy"
      value="Choisir une date"
      todayButton="Aujourdh'hui"
    />
  );
}
