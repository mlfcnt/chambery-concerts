import React from "react";
import MainDate from "./MainDate/MainDate";
import ShortcutButtons from "./ShortcutButtons/ShortcutButtons";

export default function Header({ date }) {
  return (
    <header>
      <ShortcutButtons date={date} />
      <MainDate date={date} />
    </header>
  );
}
