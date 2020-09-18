import React from "react";
import { getConcertsDates } from "../lib/concertsDates";
import Layout from "../components/Ui/Layout";
import { useRouter } from "next/router";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { useGrouppedConcerts } from "../lib/hooks/useGrouppedConcerts";
import { rootUrl } from "../lib/constants/urls";
import { useTimeline } from "../lib/hooks/useTimeline";

export default function concertDate({ concerts }) {
  let router = useRouter();
  const date = router.query.concertDate || "";
  if (router.isFallback) {
    return (
      <Layout date={date} title="chambery-concerts - Chargement">
        <h1>Chargement...</h1>
      </Layout>
    );
  }
  if (!concerts.length) {
    return (
      <Layout date={date} title={`chambery-concerts - ${date}`}>
        <h1>Pas de concerts à cette date</h1>
      </Layout>
    );
  }

  const grouppedByHour = useGrouppedConcerts(concerts, "HH:mm");
  const cards = useTimeline(grouppedByHour, "HH:mm");

  return (
    <Layout date={date} title={`chambery-concerts - ${date}`}>
      <VerticalTimeline>{cards}</VerticalTimeline>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${rootUrl}/api/concerts`);
  const concerts = await res.json();
  const dates = getConcertsDates(concerts);
  return {
    paths: dates,
    fallback: true,
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

  return { props: concerts ? { concerts } : [] };
};
