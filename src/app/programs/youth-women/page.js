import styles from "./page.module.css";

const programmes = [
  {
    icon: "🧵",
    title: "Tailoring Training",
    desc: "Equipping women with tailoring skills to create garments and build sustainable livelihoods for their families.",
  },
  {
    icon: "🧼",
    title: "Soap Making",
    desc: "Teaching women the art and business of soap production — an affordable, high-demand product with strong local markets.",
  },
  {
    icon: "💇",
    title: "Hairdressing Skills",
    desc: "Training women in professional hairdressing to open salons and earn independent income in their communities.",
  },
  {
    icon: "💼",
    title: "Entrepreneurship",
    desc: "Providing business literacy, financial management, and mentoring to help women turn skills into thriving enterprises.",
  },
  {
    icon: "📖",
    title: "Youth Awareness",
    desc: "Educating young people about the dangers of drug abuse, early pregnancy, and early marriage through interactive programmes.",
  },
  {
    icon: "🌟",
    title: "Leadership & Life Skills",
    desc: "Building confidence, communication, decision-making, and leadership abilities in both youth and women.",
  },
];

export default function YouthWomen() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.label}>Youth & Women Empowerment</span>
          <h1>Building Stronger Futures Together</h1>
          <p>
            We train women in tailoring, soap making, hairdressing, and
            entrepreneurship while educating youth about drugs, early
            pregnancy, early marriage, leadership, and essential life skills.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className={styles.grid}>
            {programmes.map((item) => (
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
            <h2>Empowering Women, Uplifting Youth</h2>
            <p>
              When women are empowered with skills and economic independence,
              entire families and communities thrive. Our vocational training
              programmes give women the tools they need to earn a living,
              support their children, and become leaders in their own right.
            </p>
            <p>
              For young people, we tackle the difficult issues head-on. Through
              age-appropriate education and mentorship, we address drug abuse,
              early pregnancy, early marriage, and other challenges that
              threaten their futures. We equip them with the life skills and
              leadership abilities they need to make informed decisions and
              become positive forces in their communities.
            </p>
            <p>
              Empowerment is not just about skills — it is about restoring
              dignity, building confidence, and creating pathways to a better
              life for those who need it most.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
