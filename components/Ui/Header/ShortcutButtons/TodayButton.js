import React from "react";
import { DateTime, Settings } from "luxon";
import { useRouter } from "next/router";
import { ddLLyyyy } from "../../../../lib/constants/dateFormat";
import styles from "../../../../styles/ShortcutButtons.module.css";

Settings.defaultLocale = "fr";

export default function TodayButton({ date }) {
  // const currentPageIsToday = date === DateTime.local().toFormat(ddLLyyyy);
  // if (currentPageIsToday) return null;
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.push("/" + DateTime.local().toFormat(ddLLyyyy));
      }}
    >
      Aujourd'hui
    </button>
  );
}
