import Image from "next/image";
import Link from "next/link";
import styles from "./about.module.css";

const team = [
  {
    name: "Austine Omondi",
    role: "Chairperson",
    image: "/Austine Omondi.jpg",
  },
  {
    name: "Evans Budoi",
    role: "Treasurer",
    image: "/Evans Budoi.jpg",
  },
  {
    name: "Sharon Anyango",
    role: "Secretary",
    image: "/Sharon Anyango.jpg",
  },
  {
    name: "Leila Mirinya",
    role: "Human Resource Manager",
    image: "/Leila Mirinya.jpg",
  },
];

const challenges = [
  "Poverty",
  "Unemployment",
  "Crime",
  "Drug Abuse",
  "Gender Based Violence",
  "Environmental Degradation",
  "Lack of Opportunities",
  "Human Rights Violations",
];

export default function About() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.label}>About Us</span>
          <h1>Dedicated to Transforming Lives in Githogoro</h1>
          <p>
            Brilliant Angels CBO was formed in 2018 and registered in 2024 to
            create sustainable opportunities that transform lives through
            education, empowerment, and community development.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyText}>
              <h2>Our Story</h2>
              <p>
                Brilliant Angels Community-Based Organisation is dedicated to
                improving life within Githogoro Slums, located in Runda Estate,
                Karura Ward, Westlands, Nairobi County.
              </p>
              <p>
                The community faces numerous challenges including poverty,
                unemployment, crime, drug abuse, gender-based violence,
                environmental degradation, lack of opportunities, and human
                rights violations.
              </p>
              <p>
                The organisation exists to create sustainable opportunities that
                transform lives through education, empowerment, and community
                development — building a thriving, resilient community where
                every individual has the opportunity to reach their full
                potential.
              </p>
            </div>
            <div className={styles.storyImage}>
              <Image
                src="/schoolchildren-group-crowd.png"
                alt="Brilliant Angels students"
                width={520}
                height={360}
                style={{ width: "100%", height: "auto", borderRadius: "var(--radius-lg)" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container">
          <h2 className="sectionTitle">Challenges We Address</h2>
          <p className="sectionSubtitle">
            The realities of Githogoro that drive our work every day.
          </p>
          <div className={styles.challengeGrid}>
            {challenges.map((c) => (
              <div key={c} className={styles.challengeCard}>
                <span className={styles.challengeIcon}>⚠️</span>
                <span>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <h2 className="sectionTitle">Our Mission &amp; Vision</h2>
          <div className={styles.mvGrid}>
            <div className={styles.mvCard}>
              <span className={styles.mvIcon}>🎯</span>
              <h3>Our Mission</h3>
              <p>
                To empower and uplift the Githogoro community by providing
                education, fostering environmental stewardship, promoting arts
                and sports, empowering youths and women, managing crises, and
                enhancing health and wellness.
              </p>
            </div>
            <div className={styles.mvCard}>
              <span className={styles.mvIcon}>🔭</span>
              <h3>Our Vision</h3>
              <p>
                Building a thriving, resilient community where every individual
                has the opportunity to reach their full potential, live in
                harmony with the environment, and enjoy a healthy and fulfilling
                life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container">
          <h2 className="sectionTitle">Management Team</h2>
          <p className="sectionSubtitle">
            The dedicated leaders driving Brilliant Angels CBO forward.
          </p>
          <div className={styles.teamGrid}>
            {team.map((member) => (
              <div key={member.name} className={styles.teamCard}>
                <div className={styles.teamImageWrap}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={280}
                    height={280}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <h3>{member.name}</h3>
                <span className={styles.teamRole}>{member.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--primary)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="sectionTitle" style={{ color: "var(--white)" }}>
            Join Our Mission
          </h2>
          <p className="sectionSubtitle" style={{ color: "rgba(255,255,255,0.8)" }}>
            Whether through volunteering, donating, or partnering — you can help
            us transform lives in Githogoro.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/donate" className="btn btnAccent">Donate Now</Link>
            <Link href="/volunteer" className="btn" style={{ border: "2px solid white", color: "white" }}>
              Volunteer
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
