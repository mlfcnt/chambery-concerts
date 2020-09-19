import React from "react";
import Layout from "../components/Ui/Layout";
import { ddLLyyyy } from "../lib/constants/dateFormat";
import { rootUrl } from "../lib/constants/urls";
import { useGrouppedConcerts } from "../lib/hooks/useGrouppedConcerts";
import { useTimeline } from "../lib/hooks/useTimeline";
import { VerticalTimeline } from "react-vertical-timeline-component";

export default function ProchainsConcerts({ concerts }) {
  const groupped = useGrouppedConcerts(concerts, ddLLyyyy, true);
  const cards = useTimeline(groupped, "DDDD");
  return (
    <Layout title="chambery-concerts - Prochains concerts" nodate>
      <h1>Prochains concerts</h1>
      <VerticalTimeline>{cards}</VerticalTimeline>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${rootUrl}/api/concerts`);
  const concerts = await res.json();

  return { props: concerts ? { concerts } : [] };
};
