import React from "react";
import ActualDate from "./ActualDate";
import DecrementButton from "./DecrementButton";
import IncrementButton from "./IncrementButton";
import styles from "../../../../styles/MainDate.module.css";
import { DateTime } from "luxon";
import { useRouter } from "next/router";
import { useSplittedDate } from "../../../../lib/hooks/useSplittedDate";
import { ddLLyyyy } from "../../../../lib/constants/dateFormat";
export default function IncrementDate({ date, type, typeOfFormat }) {
  const router = useRouter();
  const switchNumber = (operation) => {
    const { day, month, year } = useSplittedDate(date);
    return operation === "add"
      ? router.push(
          "/" +
            DateTime.fromObject({ day, month, year })
              .plus({ [type]: 1 })
              .toFormat(ddLLyyyy)
        )
      : router.push(
          "/" +
            DateTime.fromObject({ day, month, year })
              .minus({ [type]: 1 })
              .toFormat(ddLLyyyy)
        );
  };

  return (
    <div className={styles.date_and_icons}>
      <IncrementButton switchNumber={switchNumber} />
      <ActualDate date={date} typeOfFormat={typeOfFormat} />
      <DecrementButton switchNumber={switchNumber} type={type} date={date} />
    </div>
  );
}
