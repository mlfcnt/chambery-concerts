import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import styles from "../styles/Layout.module.css";
import { DateTime, Settings } from "luxon";
Settings.defaultLocale = "fr";

export default function Layout({ date, children }) {
  if (!date) date = DateTime.local();
  return (
    <div className={styles.container}>
      <Header date={date} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
