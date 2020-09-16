import React from "react";
import { capitalizeFirstLetter } from "../../../../lib/helpers/helpers";
import { useSplittedDate } from "../../../../lib/hooks/useSplittedDate";
import { DateTime, Settings } from "luxon";
Settings.defaultLocale = "fr";

export default function ActualDate({ date, typeOfFormat }) {
  console.log(date);
  const { day, month, year } = useSplittedDate(date);

  return (
    <div style={{ width: "100%" }}>
      <span>
        {capitalizeFirstLetter(
          DateTime.fromObject(date ? { day, month, year } : {}).toFormat(
            typeOfFormat
          )
        )}
      </span>
    </div>
  );
}
