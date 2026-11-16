import styles from "./page.module.css";

const components = [
  {
    icon: "📋",
    title: "Disaster Preparedness",
    desc: "Training community members in risk assessment, evacuation planning, and emergency supply readiness before disasters strike.",
  },
  {
    icon: "🚑",
    title: "Emergency Response",
    desc: "Equipping volunteers with first aid, search and rescue basics, and rapid response coordination skills.",
  },
  {
    icon: "🏘️",
    title: "Community Safety",
    desc: "Establishing local safety networks and early warning systems to protect families and neighbourhoods during crises.",
  },
  {
    icon: "📢",
    title: "Awareness Campaigns",
    desc: "Educating the community on disaster risks, climate hazards, and the importance of being prepared at all times.",
  },
  {
    icon: "🤝",
    title: "Rapid Relief Coordination",
    desc: "Mobilising volunteers and resources quickly to provide food, shelter, and essential supplies after a disaster.",
  },
  {
    icon: "🔄",
    title: "Recovery & Rebuilding",
    desc: "Supporting affected families through the recovery process with psychosocial support and livelihood restoration.",
  },
];

export default function Disaster() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.label}>Disaster & Crisis Management</span>
          <h1>Prepared. Protected. Resilient.</h1>
          <p>
            We equip communities with disaster preparedness training,
            emergency response skills, and safety programmes — ensuring that
            when crises strike, Githogoro is ready to respond and recover.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className={styles.grid}>
            {components.map((item) => (
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
            <h2>Ready When It Matters Most</h2>
            <p>
              Disasters do not wait for communities to be ready. Flooding,
              fires, disease outbreaks, and other crises can devastate
              vulnerable neighbourhoods in an instant. Our disaster and crisis
              management programme ensures that Githogoro is not caught
              off guard.
            </p>
            <p>
              Through regular preparedness training, we teach families how to
              create emergency plans, assemble supply kits, and identify safe
              evacuation routes. Our trained volunteers stand ready to
              coordinate rapid relief efforts — distributing food, water,
              blankets, and medical supplies when they are needed most.
            </p>
            <p>
              But preparation is only part of the story. We stay with
              communities through the recovery process, providing
              psychosocial support and helping families rebuild their lives
              and livelihoods. Because resilience is not just about surviving
              — it is about emerging stronger.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
