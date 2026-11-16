"use client";
import styles from "./page.module.css";

export default function Contact() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.label}>Contact Us</span>
          <h1>Let&apos;s Talk on WhatsApp</h1>
          <p>
            The fastest way to reach Brilliant Angels CBO is through WhatsApp.
            Tap the button below and start a conversation with us right away.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className={styles.center}>
            <div className={styles.waCard}>
              <div className={styles.waIcon}>📱</div>
              <h2>Chat With Us</h2>
              <p>
                Whether you want to volunteer, donate, partner, ask about our
                programmes, or just say hello — send us a message on WhatsApp
                and we will respond as soon as possible.
              </p>
              <a
                href="https://wa.me/254796595995"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.waButton}
              >
                Open WhatsApp
              </a>
              <span className={styles.waNumber}>+254 796 595 995</span>
            </div>

            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <span>📍</span>
                <div>
                  <strong>Location</strong>
                  <p>Githogoro, Runda Estate, Westlands, Nairobi</p>
                </div>
              </div>
              <div className={styles.infoCard}>
                <span>🕐</span>
                <div>
                  <strong>Hours</strong>
                  <p>Monday — Friday, 7:00 AM — 4:00 PM</p>
                </div>
              </div>
              <div className={styles.infoCard}>
                <span>✉️</span>
                <div>
                  <strong>Email</strong>
                  <p>brilliantangels2024@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
