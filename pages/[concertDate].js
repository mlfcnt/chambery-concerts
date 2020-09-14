import React from "react";
import { getConcertsDates } from "../lib/concertsDates";
import { DateTime, Settings } from "luxon";
import Layout from "../components/Layout";
import { rootUrl } from "../lib/constants";
Settings.defaultLocale = "fr";

export default function concertDate({ concerts }) {
  if (!concerts)
    return (
      <Layout>
        <h1>Pas de concerts à cette date</h1>
      </Layout>
    );
  const { artist, startDate, venue } = concerts[0];

  return (
    <Layout>
      <h1>{DateTime.fromISO(startDate).toFormat("dd-LL-yyyy")}</h1>
      <p>Artist : {artist.name}</p>
      <p>Salle : {venue.name}</p>
    </Layout>
  );
}

export async function getStaticPaths() {
  const dates = getConcertsDates(concerts);
  return {
    paths: dates,
    fallback: false,
  };
}

export const getStaticProps = async ({ params: { concertDate } }) => {
  const res = await fetch(`${rootUrl}/api/concerts`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ concertDate }),
  });
  const concerts = await res.json();
  return { props: { concerts } };
};
