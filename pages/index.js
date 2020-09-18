import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Ui/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { DateTime, Settings } from "luxon";
import { ddLLyyyy } from "../lib/constants/dateFormat";
Settings.defaultLocale = "fr";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/" + DateTime.local().toFormat(ddLLyyyy));
  }, []);
  return (
    <Layout className={styles.container}>
      <Head>
        <title>
          chambery-concerts.fr{" "}
          {process.env.NEXT_PUBLIC_ENV === "local" ? ` - DEV` : ""}
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <p>chambéry concerts 2.0</p>
      <p>Ultimate SEO 3000</p>
    </Layout>
  );
};

export default Home;
