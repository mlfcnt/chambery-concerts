import React from 'react';
import DatePickerButton from './DatePicker/DatePickerButton';
import NextShowsButton from './NextShowsButton';
import TodayButton from './TodayButton';
import styles from '../../../../styles/ShortcutButtons.module.css';
import { isDesktopOrLaptop } from '../../../../lib/helpers/reponsive';
import Link from 'next/link';
import styled from 'styled-components';

const Title = styled.a`
  color: #f4e9da;
  font-size: 1.7vh;
  &:hover {
    cursor: pointer;
    color: #ed5c4d;
  }
`;

export default function ShortcutButtons({ date }) {
  return (
    <div className={styles.container}>
      {isDesktopOrLaptop() && (
        <Link href="/">
          <Title>Actualité musicale à Chambéry</Title>
        </Link>
      )}
      <div className={styles.shortcuts_flex}>
        <TodayButton date={date} />
        <NextShowsButton />
        <DatePickerButton date={date} />
      </div>
    </div>
  );
}
