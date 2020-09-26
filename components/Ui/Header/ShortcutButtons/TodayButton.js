import React from "react";
import { DateTime, Settings } from "luxon";
import { ddLLyyyy } from "../../../../lib/constants/dateFormat";
import Link from "next/link";

Settings.defaultLocale = "fr";

export default function TodayButton({ date }) {
  const currentPageIsToday = date === DateTime.local().toFormat(ddLLyyyy);
  if (currentPageIsToday) return null;

  return (
    <Link href={"/" + DateTime.local().toFormat(ddLLyyyy)}>
      <a>
        <button>Aujourd'hui</button>
      </a>
    </Link>
  );
}
