import Link from "next/link";
import styles from "./page.module.css";

const highlights = [
  {
    icon: "🎓",
    title: "Scholarships",
    desc: "Providing full and partial scholarships to vulnerable children who would otherwise be unable to afford school fees.",
  },
  {
    icon: "👕",
    title: "School Uniforms",
    desc: "Supplying uniforms to every child in the programme so they can attend school with dignity and confidence.",
  },
  {
    icon: "🍱",
    title: "Daily Meals",
    desc: "Ensuring every learner receives a nutritious meal each day, because no child should learn on an empty stomach.",
  },
  {
    icon: "📚",
    title: "Educational Supplies",
    desc: "Providing textbooks, exercise books, stationery, and all the materials children need to succeed academically.",
  },
  {
    icon: "🤝",
    title: "Vulnerable Children Support",
    desc: "Tailored support for orphans, children from child-headed households, and those living with disabilities.",
  },
  {
    icon: "🏫",
    title: "Quality Education",
    desc: "Maintaining high academic standards through qualified teachers, modern teaching methods, and a nurturing environment.",
  },
];

export default function Education() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.label}>Education Programme</span>
          <h1>Empowering Minds, Changing Futures</h1>
          <p>
            Brilliant Angels Community School provides scholarships, uniforms,
            meals, educational supplies, and dedicated support for vulnerable
            children — ensuring every child has access to quality education.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className={styles.grid}>
            {highlights.map((item) => (
              <div key={item.title} className={styles.card}>
                <span className={styles.cardIcon}>{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container">
          <div className={styles.textContent}>
            <h2>Quality Education for Every Child</h2>
            <p>
              Education is the most powerful tool for breaking the cycle of
              poverty. At Brilliant Angels Community School, we believe that
              every child — regardless of their background — deserves the
              opportunity to learn, grow, and thrive.
            </p>
            <p>
              Our comprehensive programme removes the barriers that keep children
              out of school. From covering tuition fees to providing meals and
              supplies, we ensure that students can focus on what matters most:
              their education.
            </p>
            <p>
              Beyond academics, we foster a love of learning, critical thinking,
              and the confidence to dream big. Our graduates go on to secondary
              school, vocational training, and careers that uplift their
              families and communities.
            </p>
          </div>
        </div>
      </section>

      <section id="adopt" className={styles.adoptSection}>
        <div className="container">
          <div className={styles.adoptGrid}>
            <div className={styles.adoptContent}>
              <span className={styles.adoptBadge}>Adopt a Child Programme</span>
              <h2>One Family. Three Children. We Cover One.</h2>
              <p>
                We understand the financial burden families face when enrolling
                multiple children. That&apos;s why, when a family brings{" "}
                <strong>three children</strong> to Brilliant Angels Community
                School, we <strong>fully sponsor one child</strong> — covering
                their school fees, daily meals, and all educational books and
                supplies.
              </p>
              <p>
                This programme ensures that no family has to choose which child
                gets to learn. All three come to school, and we take care of
                one on behalf of the parents.
              </p>
              <Link href="/donate" className="btn btnPrimary">
                Support This Programme
              </Link>
            </div>
            <div className={styles.adoptVisual}>
              <div className={styles.adoptCard}>
                <div className={styles.adoptRow}>
                  <span className={styles.childIcon}>👧</span>
                  <span className={styles.childIcon}>👦</span>
                  <span className={styles.childIcon}>👧</span>
                </div>
                <div className={styles.adoptArrow}>↓</div>
                <div className={styles.adoptResult}>
                  <span className={styles.freeTag}>1 Child Fully Sponsored</span>
                  <p>Fees, meals &amp; books covered by the school</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
