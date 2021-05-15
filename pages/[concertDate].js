import React from 'react';
import { getConcertsDates } from '../lib/concertsDates';
import Layout from '../components/Ui/Layout';
import { useRouter as UseRouter } from 'next/router';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import { getGrouppedConcerts } from '../lib/helpers/getGrouppedConcerts';
import { rootUrl } from '../lib/constants/urls';
import { generateTimeline } from '../lib/helpers/getTimeline';
import styles from '../styles/ConcertDate.module.css';
import { NextSeo } from 'next-seo';
import { Settings } from 'luxon';
Settings.defaultLocale = 'fr';

export default function concertDate({ concerts }) {
  let router = UseRouter();
  const date = router.query.concertDate || '';
  const seoTitle = `Concerts aujourd'hui à Chambéry`;
  const seoDescription = `Page listant les concerts ayant lieu aujourd'hui à Chambéry.`;

  if (router.isFallback) {
    return (
      <>
        <NextSeo title={seoTitle} description={seoDescription} />
        <Layout date={date} title="chambery-concerts - Chargement">
          <h1>Chargement...</h1>
        </Layout>
      </>
    );
  }
  if (!concerts.length) {
    return (
      <>
        <NextSeo title={seoTitle} description={seoDescription} />
        <Layout date={date} title={`chambery-concerts - ${date}`}>
          <h1 className={styles.no_show}>Pas de concerts à cette date</h1>
        </Layout>
      </>
    );
  }

  const grouppedByHour = getGrouppedConcerts(concerts, 'HH:mm');
  const cards = generateTimeline(grouppedByHour, 'HH:mm');

  return (
    <>
      <NextSeo title={seoTitle} description={seoDescription} />
      <Layout date={date} title={`chambery-concerts - ${date}`}>
        <VerticalTimeline>{cards}</VerticalTimeline>
      </Layout>
    </>
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
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ concertDate }),
  });
  const concerts = await res.json();

  return { props: concerts ? { concerts: concerts.filter((x) => !x.isCanceled) } : [] };
};
