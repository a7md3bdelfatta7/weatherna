// pages/index.js
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nujoom al-Taqs - Weather Stars</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1>Nujoom al-Taqs</h1>
        <p>Weather Stars</p>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h2>Stay ahead of the weather.</h2>
          <p>Get accurate weather forecasts for your location.</p>
          <a href="#">Get Started</a>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Nujoom al-Taqs. All rights reserved.</p>
      </footer>
    </div>
  );
}