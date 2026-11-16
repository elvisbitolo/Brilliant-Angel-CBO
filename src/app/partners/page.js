import styles from "./page.module.css";

export default function Partners() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.label}>Our Partners</span>
          <h1>Partners &amp; Collaborators</h1>
          <p>
            We work with schools, organisations, and individuals who share our
            vision of transforming Githogoro through education and community
            development.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <h2 className="sectionTitle">Our Key Partners</h2>
          <p className="sectionSubtitle">
            Brilliant Angels CBO is proud to collaborate with the following
            organisations and institutions.
          </p>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Makini School</h3>
              <p>
                Our primary education partner through the Sulwe Mentorship and Scholarship programme —
                providing exposure visits and scholarship opportunities for our
                top-performing students.
              </p>
            </div>
            <div className={styles.card}>
              <h3>International Schools Network</h3>
              <p>
                Partner schools that host our Sulwe scholars for learning
                experiences and potential sponsorships.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Community Volunteers</h3>
              <p>
                Local and international volunteers who dedicate their time to
                teaching, mentoring, and supporting our programmes.
              </p>
            </div>
          </div>

          <div className={styles.becomePartner}>
            <h2>Become a Partner</h2>
            <p>
              If your organisation shares our commitment to education, community
              development, and creating opportunities for vulnerable children —
              we would love to hear from you.
            </p>
            <a
              href="mailto:brilliantangels2024@gmail.com"
              className="btn btnPrimary"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
