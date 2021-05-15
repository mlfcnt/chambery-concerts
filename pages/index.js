import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/Ui/Layout';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ddLLyyyy } from '../lib/constants/dateFormat';
import { DateTime, Settings } from 'luxon';
Settings.defaultLocale = 'fr';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/' + DateTime.local().toFormat(ddLLyyyy));
  }, []);
  return (
    <Layout className={styles.container}>
      <Head>
        <title>
          chambery-concerts.fr {process.env.NEXT_PUBLIC_ENV === 'local' ? ` - DEV` : ''}
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <p>Chargement des concerts....</p>
    </Layout>
  );
};

export default Home;
