import React from "react";
import { getConcertsDates } from "../lib/concertsDates";
import { DateTime, Settings } from "luxon";
import Layout from "../components/Ui/Layout";
import { useRouter } from "next/router";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { sortBy, groupBy } from "lodash";
import { CgMusic } from "react-icons/cg";
import styles from "../styles/Timeline.module.css";
Settings.defaultLocale = "fr";

export default function concertDate({ concerts }) {
  let router = useRouter();
  const date = router.query.concertDate || "";
  if (router.isFallback) {
    return (
      <Layout date={date}>
        <h1>Chargement...</h1>
      </Layout>
    );
  }
  if (!concerts.length) {
    return (
      <Layout date={date}>
        <h1>Pas de concerts à cette date</h1>
      </Layout>
    );
  }

  const sorted = sortBy(concerts, (c) => DateTime.fromISO(c.startDate));
  const grouppedByHour = groupBy(sorted, (c) => DateTime.fromISO(c.startDate));

  const displayConcerts = () => {
    const concertsByDate = [];
    for (const date in grouppedByHour) {
      for (const {
        startDate,
        artist,
        venue,
        style,
        description,
        largePicture,
        tumbnailPicture,
      } of grouppedByHour[date]) {
        concertsByDate.push(
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#ed5c4d", color: "#f4e9da" }}
            contentArrowStyle={{ borderRight: "10px solid  #273253" }}
            date={DateTime.fromISO(startDate).toFormat("HH:mm")}
            dateClassName={styles.hour}
            iconStyle={{ background: "#ed5c4d", color: "#273253" }}
            icon={<CgMusic />}
          >
            {largePicture || tumbnailPicture ? (
              <img
                src={largePicture || tumbnailPicture}
                className={styles.image}
              />
            ) : null}

            <h3
              className="vertical-timeline-element-title"
              className={styles.artist}
            >
              {artist.name}
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              className={styles.venue}
            >
              Lieu : {venue.name}
            </h4>
            <h4 className="vertical-timeline-element-subtitle">{style}</h4>
            <p>{description && description.slice(0, 300) + " [...]"}</p>
          </VerticalTimelineElement>
        );
      }
    }
    return concertsByDate;
  };
  return (
    <Layout date={date}>
      <VerticalTimeline>{displayConcerts()}</VerticalTimeline>
    </Layout>
  );
}

const rootUrl =
  process.env.NODE_ENV === "production"
    ? "https://chambery-concerts.vercel.app"
    : "http://localhost:3000";

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
