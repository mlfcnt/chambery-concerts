import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Ui/Layout";

const Home = ({ concerts }) => {
  return (
    <Layout className={styles.container}>
      <Head>
        <title>chambery-concerts.fr</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <p>chambéry concerts 2.0</p>
      <p>Ultimate SEO</p>
      <p>{concerts.length} concerts enregistrés en BDD</p>
    </Layout>
  );
};

export default Home;

const rootUrl =
  process.env.NODE_ENV === "production"
    ? "https://chambery-concerts.vercel.app"
    : "http://localhost:3000";

export const getStaticProps = async () => {
  // const res = await fetch(`${rootUrl}/api/concerts`);
  // const concerts = await res.json();
  const concerts = [];
  return { props: { concerts } };
};
