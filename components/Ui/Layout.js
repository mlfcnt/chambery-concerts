import React from "react";
import Header from "./Header/Header";
import { DateTime, Settings } from "luxon";
import Footer from "./Footer/Footer";
import styles from "../../styles/Layout.module.css";
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
