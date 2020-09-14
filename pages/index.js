import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import { getAllConcerts } from "../lib/api";
import Timeline from "../components/Timeline/Timeline";
import { groupConcertsByDate } from "../lib/helpers/helpers";

const Home = ({ concerts }) => {
  const concertsGrouppedByDay = groupConcertsByDate(concerts);
  return (
    <Layout className={styles.container}>
      <Head>
        <title>
          chambery-concerts.fr{" "}
          {process.env.NEXT_PUBLIC_ENV === "local" ? ` - DEV` : ""}
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <p>{concerts.length} concerts en BDD</p>
      <Timeline concerts={concertsGrouppedByDay} />
    </Layout>
  );
};

export default Home;

export const getStaticProps = async () => {
  const concerts = await getAllConcerts();

  return {
    props: {
      concerts,
    },
  };
};
