import React from "react";
import {
  DatePicker as DatePickerCarbon,
  DatePickerInput,
} from "carbon-components-react";
import { useRouter } from "next/router";
import { ddLLyyyy } from "../../../../../lib/constants/dateFormat";
import { DateTime, Settings } from "luxon";
Settings.defaultLocale = "fr";

export default function DatePicker() {
  let router = useRouter();

  const handleChange = (date) => {
    router.push(
      "/" + DateTime.fromFormat(date, "dd/LL/yyyy").toFormat(ddLLyyyy)
    );
  };
  return (
    <DatePickerCarbon dateFormat="d/m/Y" datePickerType="simple" locale="fr">
      <DatePickerInput
        id="date-picker-calendar-id"
        placeholder="mm/dd/yyyy"
        onInput={(e) => handleChange(e.target.value)}
        // labelText="Choix de la date"
        hideLabel={true}
        type="text"
        size="sm"
      />
    </DatePickerCarbon>
  );
}
