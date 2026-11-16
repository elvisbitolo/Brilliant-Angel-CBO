import styles from "./page.module.css";

const teams = [
  {
    icon: "⚽",
    title: "Community Football Team",
    desc: "Bringing young people together on the pitch to build teamwork, discipline, and a sense of belonging.",
  },
  {
    icon: "🏉",
    title: "Rugby Team",
    desc: "Teaching resilience, physical fitness, and sportsmanship through rugby — a sport that builds character.",
  },
  {
    icon: "💃",
    title: "Dance Crew",
    desc: "Providing a creative outlet through dance, allowing youth to express themselves and build confidence on and off the stage.",
  },
  {
    icon: "🎯",
    title: "Talent Development",
    desc: "Identifying and nurturing raw talent, giving young people a pathway to personal growth and opportunity.",
  },
  {
    icon: "🚫",
    title: "Keeping Youth Safe",
    desc: "Offering positive alternatives that steer young people away from drugs, crime, and destructive behaviours.",
  },
  {
    icon: "🤝",
    title: "Community Spirit",
    desc: "Fostering unity and pride as the entire community rallies behind its teams and artists.",
  },
];

export default function SportsArts() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.label}>Sports & Arts Programme</span>
          <h1>Play. Create. Thrive.</h1>
          <p>
            Through our community football team, rugby team, and dance crew,
            we develop talent, build character, and keep young people engaged
            in positive activities — far from drugs and crime.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className={styles.grid}>
            {teams.map((item) => (
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
            <h2>More Than Just a Game</h2>
            <p>
              Sports and the arts have the remarkable power to transform lives.
              For the youth of Githogoro, our football, rugby, and dance
              programmes are a lifeline — offering structure, mentorship, and
              a sense of purpose during the most vulnerable years of their
              lives.
            </p>
            <p>
              On the field and on the stage, young people learn discipline,
              perseverance, and teamwork. They discover that hard work pays
              off, that failure is not the end, and that they are capable of
              far more than they ever imagined.
            </p>
            <p>
              Most importantly, these programmes keep youth occupied and
              connected to their community, providing a powerful shield
              against the lure of drugs, crime, and hopelessness.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
