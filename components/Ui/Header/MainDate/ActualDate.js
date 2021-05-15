import React from 'react';
import { capitalizeFirstLetter } from '../../../../lib/helpers/helpers';
import { getSplittedDate } from '../../../../lib/helpers/getSplittedDate';
import styles from '../../../../styles/ActualDate.module.css';
import { DateTime, Settings } from 'luxon';
Settings.defaultLocale = 'fr';

export default function ActualDate({ date, typeOfFormat }) {
  const { day, month, year } = getSplittedDate(date);
  return (
    <div>
      <span className={styles.actual_date}>
        {capitalizeFirstLetter(
          DateTime.fromObject(date ? { day, month, year } : {}).toFormat(typeOfFormat),
        )}
      </span>
    </div>
  );
}
