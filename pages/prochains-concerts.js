import React, { useState } from 'react';
import Layout from '../components/Ui/Layout';
import { ddLLyyyy } from '../lib/constants/dateFormat';
import { rootUrl } from '../lib/constants/urls';
import { useGrouppedConcerts } from '../lib/hooks/useGrouppedConcerts';
import { useTimeline } from '../lib/hooks/useTimeline';
import { NextSeo } from 'next-seo';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import { animateScroll as scroll } from 'react-scroll';
import styles from '../styles/Prochains-concerts.module.css';
import { HiArrowNarrowUp } from 'react-icons/hi';
import { isDesktopOrLaptop } from '../lib/helpers/reponsive';
import dayjs from 'dayjs';

export default function ProchainsConcerts({ concerts }) {
  const groupped = useGrouppedConcerts(concerts, ddLLyyyy, true);
  const cards = useTimeline(groupped, 'DDDD');
  const seoTitle = `Prochains concerts ayant lieu à Chambéry`;
  const seoDescription = `Page listant les prochains concerts ayant lieu à Chambéry.`;

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <NextSeo title={seoTitle} description={seoDescription} />
      <Layout title="chambery-concerts - Prochains concerts" nodate>
        <h1>Prochains concerts</h1>
        {cards.length ? (
          <>
            <VerticalTimeline>{cards}</VerticalTimeline>
            <a onClick={scrollToTop} className={styles.scroll_to_top_button}>
              <HiArrowNarrowUp />
              {isDesktopOrLaptop() && <span>Retour au sommet</span>}
            </a>
          </>
        ) : (
          <h2>Pas de concerts prévus pour le moment...</h2>
        )}
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${rootUrl}/api/concerts`);
  const concerts = await res.json();
  return {
    props: concerts
      ? { concerts: concerts.filter((x) => dayjs(x.startDate).isAfter(dayjs()) && !x.isCanceled) }
      : [],
  };
};
