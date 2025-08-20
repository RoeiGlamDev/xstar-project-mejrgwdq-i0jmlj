import React from 'react';
import Head from 'next/head';
import styles from './page.module.css'; // Assuming you have a CSS module for styles

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>HouseIL - Luxury Accommodations</title>
        <meta name="description" content="Experience luxury living with HouseIL." />
      </Head>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Welcome to HouseIL</h1>
          <p className={styles.subtitle}>Your luxury getaway awaits</p>
        </header>
        <main className={styles.main}>
          <section className={styles.features}>
            <h2 className={styles.featureTitle}>Why Choose Us?</h2>
            <div className={styles.featureList}>
              <div className={styles.featureItem}>
                <h3>Elegant Design</h3>
                <p>Experience high-end interiors and exquisite decor.</p>
              </div>
              <div className={styles.featureItem}>
                <h3>Prime Locations</h3>
                <p>Stay in the heart of the city or in serene locations.</p>
              </div>
              <div className={styles.featureItem}>
                <h3>Exclusive Services</h3>
                <p>Enjoy personalized services tailored to your needs.</p>
              </div>
            </div>
          </section>
        </main>
        <footer className={styles.footer}>
          <p>&copy; 2023 HouseIL. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default HomePage;