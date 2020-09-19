import React from "react";
import styles from "../../../styles/Footer.module.css";
import { FiTwitter } from "react-icons/fi";

export default function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        {/* <div className="footer_button">
          <ContactForm />
        </div> */}

        <span>Soyez notifié des concerts sur</span>
        <div className={styles.footer_button}>
          <a
            href="https://twitter.com/chambe_concerts"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiTwitter />
          </a>
        </div>
        <a
          className={styles.twitter_handle}
          href="https://twitter.com/chambe_concerts"
          target="_blank"
          rel="noopener noreferrer"
        >
          @chambe-concerts
        </a>
        {/* <div className={styles.footer_button} className={styles.simplon_button}>
          <a
            href="https://auvergnerhonealpes.simplon.co/chambery.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/logo_simplon.png" alt="Logo École Simplon" />
          </a>
        </div> */}
      </footer>
    </div>
  );
}
