import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home = ({ concerts }) => {
  return <p>test</p>;
};

export default Home;

const rootUrl = "http://localhost:3000";
// process.env.NODE_ENV === "production"
//   ? "https://chambe-concerts.herokuapp.com"
//   : "http://localhost:3000";
// process.env.NODE_ENV === "production"
//   ? "https://chambe-concerts.herokuapp.com"
//   : "http://localhost:3000";

export const getStaticProps = async () => {
  // const res = await fetch(`${rootUrl}/api/concerts/concerts_dates`);
  // const concerts = await res.json();
  const concerts = [];
  return { props: { concerts } };
};
