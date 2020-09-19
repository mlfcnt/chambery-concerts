import React from "react";
import MainDate from "./MainDate/MainDate";
import ShortcutButtons from "./ShortcutButtons/ShortcutButtons";

export default function Header({ date, nodate }) {
  return (
    <header>
      <ShortcutButtons date={date} />
      <MainDate date={date} nodate={nodate} />
    </header>
  );
}
