import React from "react";
import { DateTime, Settings } from "luxon";
import { ddLLyyyy } from "../../../../lib/constants/dateFormat";
import Link from "next/link";
import styled from "styled-components";

Settings.defaultLocale = "fr";

const SuperCoolButton = styled.button`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  padding: 12px;
  border: 4px solid #f4e9da;
  background-color: #273253;
  color: #f4e9da;

  &:hover {
    color: #ed5c4d;
    border: 4px solid #ed5c4d;
    cursor: pointer;
  }
`;

export default function TodayButton({ date }) {
  const currentPageIsToday = date === DateTime.local().toFormat(ddLLyyyy);
  if (currentPageIsToday) return null;

  return (
    <Link href={"/" + DateTime.local().toFormat(ddLLyyyy)}>
      <a>
        <SuperCoolButton>Aujourd'hui</SuperCoolButton>
      </a>
    </Link>
  );
}
