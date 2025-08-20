import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import styles from './contact.module.css'; // Assuming you have a CSS module for styling

const ContactPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Contact Us - HouseIL</title>
                <meta name="description" content="Get in touch with HouseIL for luxury stays." />
            </Head>
            <div className={styles.container}>
                <h1 className={styles.title}>Contact Us</h1>
                <form className={styles.contactForm}>
                    <label className={styles.label}>
                        Name:
                        <input type="text" name="name" className={styles.input} required />
                    </label>
                    <label className={styles.label}>
                        Email:
                        <input type="email" name="email" className={styles.input} required />
                    </label>
                    <label className={styles.label}>
                        Message:
                        <textarea name="message" className={styles.textarea} required></textarea>
                    </label>
                    <button type="submit" className={styles.submitButton}>Send Message</button>
                </form>
            </div>
        </>
    );
};

export default ContactPage;