import React from "react";
import { capitalizeFirstLetter } from "../../../../lib/helpers/helpers";
import { DateTime } from "luxon";

export default function ActualDate({ date, typeOfFormat }) {
  return (
    <div style={{ width: "100%" }}>
      <span>
        {capitalizeFirstLetter(DateTime.fromISO(date).toFormat(typeOfFormat))}
      </span>
    </div>
  );
}
