import React, { forwardRef } from 'react';

import { useRouter } from 'next/router';
import { ddLLyyyy } from '../../../../../lib/constants/dateFormat';
import { DateTime, Settings } from 'luxon';
import RDP from 'react-datepicker';
import { CgCalendarToday } from 'react-icons/cg';
import styled from 'styled-components';
Settings.defaultLocale = 'fr';

const CoolDiv = styled.div`
  &:hover {
    color: #ed5c4d;
    cursor: pointer;
  }
`;

const CustomButton = forwardRef(({ value, onClick }, ref) => {
  return (
    <CoolDiv ref={ref} onClick={onClick}>
      <CgCalendarToday size="2.5rem" />
      {value}
    </CoolDiv>
  );
});

CustomButton.displayName = 'CustomDatePickerButton';

export default function DatePicker() {
  let router = useRouter();
  const handleChange = (date) => {
    router.push('/' + DateTime.fromJSDate(date).toFormat(ddLLyyyy));
  };
  return (
    <RDP
      locale="fr"
      dateFormat="dd/mm/yyyy"
      placeholderText="Calendrier"
      todayButton="Aujourd'hui"
      customInput={<CustomButton />}
      onChange={(date) => handleChange(date)}
      withPortal
    />
  );
}
