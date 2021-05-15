import React from 'react';
import ActualDate from './ActualDate';
import DecrementButton from './DecrementButton';
import IncrementButton from './IncrementButton';
import styles from '../../../../styles/MainDate.module.css';
import { DateTime } from 'luxon';
import { getSplittedDate } from '../../../../lib/helpers/getSplittedDate';
import { ddLLyyyy } from '../../../../lib/constants/dateFormat';
export default function IncrementDate({ date, type, typeOfFormat }) {
  const generateHref = (operation) => {
    if (!date || !operation) return '/'; // evite de crasher au build
    const { day, month, year } = getSplittedDate(date);
    return operation === 'add'
      ? '/' +
          DateTime.fromObject({ day, month, year })
            .plus({ [type]: 1 })
            .toFormat(ddLLyyyy)
      : '/' +
          DateTime.fromObject({ day, month, year })
            .minus({ [type]: 1 })
            .toFormat(ddLLyyyy);
  };

  return (
    <div className={styles.date_and_icons}>
      <IncrementButton generateHref={generateHref} />
      <ActualDate date={date} typeOfFormat={typeOfFormat} />
      <DecrementButton generateHref={generateHref} type={type} date={date} />
    </div>
  );
}
