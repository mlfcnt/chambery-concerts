import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home = ({ concerts }) => {
  const alertNextShow = () => alert(concerts.artist.name);

  return (
    <div className={styles.container}>
      <p>chambéry concerts 2.0</p>
      <p>Ultimate SEO</p>
      <button onClick={alertNextShow}>Prochain concert</button>
    </div>
  );
};

export default Home;

const rootUrl =
  process.env.NODE_ENV === "production"
    ? "https://chambery-concerts.vercel.app"
    : "http://localhost:3000";

export const getStaticProps = async () => {
  const res = await fetch(`${rootUrl}/api/concerts/concerts_dates`);
  const concerts = await res.json();
  return { props: { concerts } };
};
