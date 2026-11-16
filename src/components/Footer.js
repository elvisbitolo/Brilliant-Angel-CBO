import Link from "next/link";
import styles from "./Footer.module.css";

const programs = [
  { href: "/programs/education", label: "Education" },
  { href: "/programs/environment", label: "Environment" },
  { href: "/programs/sports-arts", label: "Sports & Arts" },
  { href: "/programs/youth-women", label: "Youth & Women" },
  { href: "/programs/health", label: "Health & Wellness" },
  { href: "/programs/disaster", label: "Disaster Management" },
];

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/gallery", label: "Gallery" },
  { href: "/news", label: "News" },
  { href: "/partners", label: "Partners" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/donate", label: "Donate" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandCol}>
          <Link href="/" className={styles.logo}>
            Brilliant Angels Academy
          </Link>
          <p className={styles.motto}>&ldquo;Empowering Change, Inspiring Hope&rdquo;</p>
          <p className={styles.desc}>
            Dedicated to improving life in Githogoro Slums through education,
            environmental stewardship, youth empowerment, and community
            development.
          </p>
          <div className={styles.socials}>
            <a href="https://web.facebook.com/BrilliantAngelsAcademy/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">FB</a>
            <a href="https://www.facebook.com/profile.php?id=61564998772558" target="_blank" rel="noopener noreferrer" aria-label="Facebook Profile">FB2</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">X</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">YT</a>
          </div>
        </div>

        <div className={styles.col}>
          <h4>Programs</h4>
          <ul>
            {programs.map((p) => (
              <li key={p.href}><Link href={p.href}>{p.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map((p) => (
              <li key={p.href}><Link href={p.href}>{p.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Contact</h4>
          <ul className={styles.contactList}>
            <li>📍 Githogoro, Westlands, Nairobi</li>
            <li>
              <a href="https://wa.me/254796595995" target="_blank" rel="noopener noreferrer">
                📱 +254 796 595 995
              </a>
            </li>
            <li>
              <a href="mailto:brilliantangels2024@gmail.com">
                ✉️ brilliantangels2024@gmail.com
              </a>
            </li>
            <li>🏦 M-Pesa Pay Bill: 522533 (Acc: 7902003)</li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Brilliant Angels Academy. All rights reserved.</p>
      </div>
    </footer>
  );
}
