import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          <Image
            src="/school-logo.png"
            width={44}
            height={44}
            alt="Brilliant Angels Academy logo"
          />
          <div className={styles.brandText}>
            <span className={styles.name}>Brilliant Angels</span>
            <span className={styles.tag}>Academy</span>
          </div>
        </Link>
        <Navbar />
      </div>
    </header>
  );
}
