import styles from "./page.module.css";

const services = [
  {
    icon: "🏥",
    title: "Medical Camps",
    desc: "Bringing free medical care directly to the community through regular health camps offering check-ups, treatment, and referrals.",
  },
  {
    icon: "🎗️",
    title: "HIV Awareness",
    desc: "Running education campaigns on HIV prevention, testing, and treatment to reduce stigma and save lives.",
  },
  {
    icon: "🧠",
    title: "Mental Health Support",
    desc: "Providing accessible mental health services and counselling for individuals and families affected by trauma and stress.",
  },
  {
    icon: "💬",
    title: "Counselling Services",
    desc: "Offering professional counselling to community members dealing with grief, addiction, relationship issues, and life challenges.",
  },
  {
    icon: "🩺",
    title: "Reproductive Health",
    desc: "Educating the community on family planning, maternal health, and reproductive rights to ensure healthier outcomes.",
  },
  {
    icon: "💧",
    title: "Sanitation & Clean Water",
    desc: "Advocating for and supporting access to proper sanitation facilities and clean drinking water for every household.",
  },
];

export default function Health() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.label}>Health & Wellness Programme</span>
          <h1>Healthy Communities, Thriving Lives</h1>
          <p>
            From medical camps and HIV awareness to mental health support,
            counselling, reproductive health education, and clean water
            initiatives — we are building a healthier, stronger community.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className={styles.grid}>
            {services.map((item) => (
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
            <h2>Wellness at the Heart of Our Mission</h2>
            <p>
              Health is the foundation upon which everything else is built.
              Without good health, children cannot learn, parents cannot work,
              and communities cannot grow. Our health and wellness programme
              addresses the most pressing health challenges in Githogoro with
              compassion and determination.
            </p>
            <p>
              Through regular medical camps, we bring professional healthcare
              to those who would otherwise go without. Our HIV awareness
              campaigns are breaking stigma and encouraging testing and
              treatment. Mental health and counselling services provide a
              lifeline for individuals and families navigating trauma and
              hardship.
            </p>
            <p>
              We also advocate for clean water and proper sanitation — basic
              necessities that remain out of reach for many. Because every
              person deserves the chance to live a healthy, dignified life.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
