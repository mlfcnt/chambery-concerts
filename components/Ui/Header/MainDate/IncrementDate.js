import React from "react";
import ActualDate from "./ActualDate";
import DecrementButton from "./DecrementButton";
import IncrementButton from "./IncrementButton";
import styles from "../../../../styles/MainDate.module.css";

export default function IncrementDate({ date, type, typeOfFormat }) {
  const switchNumber = (operation) => {
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
