import { useState } from "react";
// import { getAllDates } from "../api/concerts";

export default function Concert({ concerts: cc }) {
  const [concerts] = useState(cc);
  if (!concerts.length) return <p>Chargement...</p>;
  // console.log(concerts);
  return concerts.map(({ startDate, artist, venue }) => {
    console.log("here", artist.name);
    <div>
      <p>{startDate}</p>
      <p>{artist.name}</p>
      <p>{venue.name}</p>
    </div>;
  });
}

export async function getStaticPaths() {
  // const paths = (await getAllDates()) || [{ params: { date: "22-22-22" } }];
  const paths = [{ params: { date: "22-22-22" } }];
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { date } }) {
  const concerts = [];

  return {
    props: { concerts },
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 1,
  };
}
