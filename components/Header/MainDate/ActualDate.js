import React from "react";
import { capitalizeFirstLetter } from "../../../lib/helpers/helpers";
import { DateTime, Settings } from "luxon";
Settings.defaultLocale = "fr";

export default function ActualDate({ date, typeOfFormat }) {
  return (
    <div style={{ width: "100%" }}>
      <span>
        {capitalizeFirstLetter(DateTime.fromISO(date).toFormat(typeOfFormat))}
      </span>
    </div>
  );
}
