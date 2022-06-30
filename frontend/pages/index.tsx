import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import WelcomeHeader from '../components/Homepage/WelcomeHeader';
import LibraryView from '../components/Library/LibraryView';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Library Manager</title>
        <meta name="description" content="A library manager web app." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <WelcomeHeader />
        <LibraryView />
      </main>
    </div>
  );
};

export default Home;
