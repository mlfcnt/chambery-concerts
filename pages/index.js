import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Ui/Layout";

const Home = () => {
  console.log(process.env.NEXT_PUBLIC_ENV);
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
      <p>Ultimate SEO</p>
    </Layout>
  );
};

export default Home;
