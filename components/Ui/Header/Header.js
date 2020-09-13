import React from "react";
import MainDate from "./MainDate/MainDate";
import ShortcutButtons from "./ShortcutButtons";

export default function Header({ date }) {
  return (
    <header>
      <MainDate date={date} />
      <ShortcutButtons />
    </header>
  );
}
