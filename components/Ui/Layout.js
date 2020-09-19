import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import styles from "../../styles/Layout.module.css";
import Head from "next/head";

export default function Layout({ date, title, nodate = false, children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header date={date} nodate={nodate} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
