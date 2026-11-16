import Link from "next/link";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <span className={styles.badge}>Est. 2018 — Registered 2024</span>
        <h1>
          Brilliant Angels Academy
          <br />
          <span>Empowering Communities. Creating Brighter Futures.</span>
        </h1>
        <p className={styles.desc}>
          Brilliant Angels Academy is dedicated to transforming lives in Githogoro
          Slums through education, environmental stewardship, youth empowerment,
          and community development.
        </p>
        <div className={styles.buttons}>
          <Link href="/donate" className={styles.primary}>
            Donate Now
          </Link>
          <Link href="/volunteer" className={styles.secondary}>
            Become a Volunteer
          </Link>
        </div>
      </div>
    </section>
  );
}
