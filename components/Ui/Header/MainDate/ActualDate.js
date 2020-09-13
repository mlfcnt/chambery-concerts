import React from "react";
import { capitalizeFirstLetter } from "../../../../lib/helpers/helpers";
import { DateTime } from "luxon";

export default function ActualDate({ dateSize, date, typeOfFormat }) {
  return (
    <div style={{ width: "100%" }}>
      <span style={{ fontSize: dateSize }}>
        {capitalizeFirstLetter(DateTime.fromISO(date).toFormat(typeOfFormat))}
      </span>
    </div>
  );
}
