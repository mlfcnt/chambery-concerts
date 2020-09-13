import React from "react";
import Header from "./Header/Header";
import { DateTime, Settings } from "luxon";
Settings.defaultLocale = "fr";

export default function Layout({ date, children }) {
  if (!date) date = DateTime.local();
  return (
    <>
      <Header date={date} />
      <main>{children}</main>
    </>
  );
}
