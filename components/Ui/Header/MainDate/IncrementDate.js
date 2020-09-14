import React from "react";
import ActualDate from "./ActualDate";
import DecrementButton from "./DecrementButton";
import IncrementButton from "./IncrementButton";
import styles from "../../../../styles/MainDate.module.css";
import { useRouter } from "next/router";
export default function IncrementDate({ date, type, typeOfFormat }) {
  const router = useRouter();
  const switchNumber = (operation) => {
    router.push("http://localhost:3000/16-09-2020");
    // return operation === 'add'
    //   ? history.push({
    //       pathname: '/concerts',
    //       search: `${moment(date).add(1, type).format('DD-MM-YYYY')}`,
    //     })
    //   : history.push({
    //       pathname: '/concerts',
    //       search: `${moment(date)
    //         .subtract(1, type)
    //         .format('DD-MM-YYYY')}`,
    //     });
  };

  return (
    <div className={styles.date_and_icons}>
      <IncrementButton switchNumber={switchNumber} />
      <ActualDate date={date} typeOfFormat={typeOfFormat} />
      <DecrementButton switchNumber={switchNumber} type={type} date={date} />
    </div>
  );
}
