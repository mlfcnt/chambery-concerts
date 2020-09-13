import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home = ({ concerts }) => {
  return <p>test</p>;
};

export default Home;

const rootUrl =
  process.env.NODE_ENV === "production"
    ? "https://chambery-concerts.vercel.app/"
    : "http://localhost:3000";

export const getStaticProps = async () => {
  const res = await fetch(`${rootUrl}/api/concerts/concerts_dates`);
  const concerts = await res.json();
  return { props: { concerts } };
};
